package kr.co.mcmp.ape.cbtumblebug.api;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Collections;
import java.util.List;
import java.util.function.Supplier;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import kr.co.mcmp.ape.cbtumblebug.dto.MciDto;
import kr.co.mcmp.ape.cbtumblebug.dto.MciResponse;
import kr.co.mcmp.ape.cbtumblebug.dto.NamespaceDto;
import kr.co.mcmp.ape.cbtumblebug.dto.NamespaceResponse;
import kr.co.mcmp.ape.cbtumblebug.exception.CbtumblebugException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
@RequiredArgsConstructor
public class CbtumblebugRestApi {

    @Value("${cbtumblebug.url}")
    private String cbtumblebugUrl;

    @Value("${cbtumblebug.port}")
    private String cbtumblebugPort;

    @Value("${cbtumblebug.id}")
    private String cbtumblebugId;
    
    @Value("${cbtumblebug.pass}")
    private String cbtumblebugPass;

    private final CbtumblebugRestClient restClient;

    private HttpHeaders createCommonHeaders() {
        HttpHeaders headers = new HttpHeaders();
        String auth = cbtumblebugId + ":" + cbtumblebugPass;
        byte[] encodedAuth = Base64.getEncoder().encode(auth.getBytes(StandardCharsets.UTF_8));
        String authHeader = "Basic " + new String(encodedAuth);
        headers.set("Authorization", authHeader);
        // headers.set("Content-Type", "application/json");
        return headers;
    }

    private String createApiUrl(String endpoint) {
        return String.format("http://%s:%s%s", cbtumblebugUrl, cbtumblebugPort, endpoint);
    }

    public boolean checkTumblebug(){
        log.info("check Tumblebug is ready");
        String apiUrl = createApiUrl("/readyz");
        HttpHeaders headers = createCommonHeaders();
        try {
            ResponseEntity<String> response = restClient.request(apiUrl, headers, null, HttpMethod.GET, new ParameterizedTypeReference<String>() {});
            return response.getStatusCode().is2xxSuccessful();
        } catch (Exception e) {
            log.error("Tumblebug connection fail", e);
            return false;
        }
    }
    
    private <T> T executeWithConnectionCheck(String operationName, Supplier<T> apiCall) {
        if (!checkTumblebug()) {
            log.error("Tumblebug에 연결할 수 없습니다. {} 작업을 수행할 수 없습니다.", operationName);
            throw new CbtumblebugException("Tumblebug 연결 실패");
        }
        return apiCall.get();
    }

    public List<NamespaceDto> getAllNamespace() {
        log.info("Fetching all namespaces");
        return executeWithConnectionCheck("Fetching all namespaces", () ->{
            String apiUrl = createApiUrl("/tumblebug/ns");
            HttpHeaders headers = createCommonHeaders();
            ResponseEntity<NamespaceResponse> response = restClient.request(apiUrl, headers, null, HttpMethod.GET, new ParameterizedTypeReference<NamespaceResponse>() {});
            return response.getBody() != null ? response.getBody().getNs() : Collections.emptyList();
        });
    }

    public List<MciDto> getMcisByNamespace(String namespace) {
        log.info("Fetching MCIs by namespace: {}", namespace);
        return executeWithConnectionCheck("Fetching MCIs by namespace", () ->{
            String apiUrl = createApiUrl(String.format("/tumblebug/ns/%s/mci", namespace));
            HttpHeaders headers = createCommonHeaders();
            ResponseEntity<MciResponse> response = restClient.request(apiUrl, headers, null, HttpMethod.GET, new ParameterizedTypeReference<MciResponse>() {});
            return response.getBody() != null ? response.getBody().getMci() : Collections.emptyList();
        });
    }

    public String getK8sClusterInfo(){
        log.info("Fetching all K8sClusterInfo");
        return executeWithConnectionCheck("Fetching all K8sClusterInfo", () ->{
            String apiUrl = createApiUrl("/k8sClusterInfo");
            HttpHeaders headers = createCommonHeaders();
            ResponseEntity<String> response = restClient.request(apiUrl, headers, headers, HttpMethod.GET, new ParameterizedTypeReference<String>() {});
            return response.getBody() != null ? response.getBody() : null;
        });
    }

    public String getK8sClusterByNamespace(String namespace){
        log.info("Fetching k8sCluster Info by namespace :{}", namespace);
        return executeWithConnectionCheck("Fetching k8sCluster Info by namespace", () ->{
            String apiUrl = createApiUrl(String.format("/ns/%s/k8scluster", namespace));
            HttpHeaders headers = createCommonHeaders();
            ResponseEntity<String> response = restClient.request(apiUrl, headers, null, HttpMethod.GET, new ParameterizedTypeReference<String>() {});
            return response.getBody() != null ? response.getBody() : null;
        });
    }

}
