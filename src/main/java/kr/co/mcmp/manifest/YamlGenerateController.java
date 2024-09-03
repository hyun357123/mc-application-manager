package kr.co.mcmp.manifest;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import kr.co.mcmp.manifest.k8s.K8SDeployDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name="yaml generate", description="각 yaml을 조립해줌")
@RestController
@RequestMapping("/yaml")
public class YamlGenerateController {

    Logger logger = LoggerFactory.getLogger(YamlGenerateController.class);

    @Autowired
    YamlGenerateService yamlGenSvc;

    @Operation(summary = "yaml generate for pod")
    @PostMapping("/pod")
    public String generatePodYaml(K8SPodDTO k8sPodDto){
        //System.out.println("==================================" + k8sPodDto.toString());
        System.out.println("==================================");
        return "";
        //return yamlGenSvc.generatePodYaml(k8sPodDto);
    }

    @Operation(summary = "yaml generate for deployment")
    @PostMapping("/deployment")
    public String generateDeploymentYaml(K8SDeployDTO k8sDto){
        return null;
    }

    @Operation(summary = "yaml generate for service")
    @PostMapping("/service")
    public String generateServiceYaml(K8SDeployDTO k8sDto){
        return null;
    }

    @Operation(summary = "yaml generate for configmap")
    @PostMapping("/configmap")
    public String generateConfigmapYaml(K8SDeployDTO k8sDto){
        return null;
    }

    @Operation(summary = "yaml generate for HPA")
    @PostMapping("/hpa")
    public String generateHPAYaml(K8SHPADTO hpaDto){
        return yamlGenSvc.generateHPAYaml(hpaDto);
    }


}
