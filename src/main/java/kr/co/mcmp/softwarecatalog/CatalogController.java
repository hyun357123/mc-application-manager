package kr.co.mcmp.softwarecatalog;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import kr.co.mcmp.response.ResponseCode;
import kr.co.mcmp.response.ResponseWrapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Tag(name="software catalog crud", description="software catalog 정보 입력, 수정 외")
@RestController
@Log4j2
@RequestMapping("/catalog/software")
@RequiredArgsConstructor
public class CatalogController {


   private final CatalogService catalogService;

    @Operation(summary = "카탈로그 생성")
    @PostMapping
    public ResponseEntity<ResponseWrapper<SoftwareCatalogDTO>> createCatalog(
            @RequestBody SoftwareCatalogDTO catalogDTO,
            @RequestParam(required = false) String username) {
        SoftwareCatalogDTO createdCatalog = catalogService.createCatalog(catalogDTO, username);
        return ResponseEntity.status(HttpStatus.CREATED).body(new ResponseWrapper<>(createdCatalog));
    }

    @Operation(summary = "카탈로그 조회")
    @GetMapping("/{catalogId}")
    public ResponseEntity<ResponseWrapper<SoftwareCatalogDTO>> getCatalog(@PathVariable Long catalogId) {
        SoftwareCatalogDTO catalog = catalogService.getCatalog(catalogId);
        return ResponseEntity.ok(new ResponseWrapper<>(catalog));
    }

    @Operation(summary = "모든 카탈로그 조회")
    @GetMapping
    public ResponseEntity<ResponseWrapper<List<SoftwareCatalogDTO>>> getAllCatalogs() {
        List<SoftwareCatalogDTO> catalogs = catalogService.getAllCatalogs();
        return ResponseEntity.ok(new ResponseWrapper<>(catalogs));
    }


    @Operation(summary = "카탈로그 업데이트")
    @PutMapping("/{catalogId}")
    public ResponseEntity<ResponseWrapper<SoftwareCatalogDTO>> updateCatalog(
            @PathVariable Long catalogId,
            @RequestBody SoftwareCatalogDTO catalogDTO,
            @RequestParam(required = false) String username) {
        SoftwareCatalogDTO updatedCatalog = catalogService.updateCatalog(catalogId, catalogDTO, username);
        return ResponseEntity.ok(new ResponseWrapper<>(updatedCatalog));
    }

    @Operation(summary = "카탈로그 삭제")
    @DeleteMapping("/{catalogId}")
    public ResponseEntity<ResponseWrapper<Void>> deleteCatalog(@PathVariable Long catalogId) {
        catalogService.deleteCatalog(catalogId);
        return ResponseEntity.ok(new ResponseWrapper<>(ResponseCode.OK));
    }

    @Operation(summary = "Nexus 정보를 포함한 모든 카탈로그 조회")
    @GetMapping("/combined")
    public ResponseEntity<ResponseWrapper<List<CombinedCatalogDTO>>> getAllCatalogsWithNexusInfo() {
        List<CombinedCatalogDTO> combinedCatalogs = catalogService.getAllCatalogsWithNexusInfo();
        return ResponseEntity.ok(new ResponseWrapper<>(combinedCatalogs));
    }

    @Operation(summary = "Nexus 정보를 포함한 특정 카탈로그 조회")
    @GetMapping("/{catalogId}/combined")
    public ResponseEntity<ResponseWrapper<CombinedCatalogDTO>> getCatalogWithNexusInfo(@PathVariable Long catalogId) {
        CombinedCatalogDTO combinedCatalog = catalogService.getCatalogWithNexusInfo(catalogId);
        return ResponseEntity.ok(new ResponseWrapper<>(combinedCatalog));
    }

/* 
    @Operation(summary = "카탈로그 생성")
    @PostMapping
    public ResponseEntity<ResponseWrapper<SoftwareCatalogDTO>> createCatalog(
            @RequestParam String source,
            @RequestBody String jsonData,
            @RequestParam String username,
            @RequestBody SoftwareCatalogDTO catalogDTO) {
        SoftwareCatalogDTO createdCatalog = catalogService.createCatalog(source, jsonData, username, catalogDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(new ResponseWrapper<>(createdCatalog));
    }

    @Operation(summary = "카탈로그 조회")
    @GetMapping("/{catalogId}")
    public ResponseEntity<ResponseWrapper<SoftwareCatalogDTO>> getCatalog(@PathVariable Long catalogId) {
        SoftwareCatalogDTO catalog = catalogService.getCatalog(catalogId);
        return ResponseEntity.ok(new ResponseWrapper<>(catalog));
    }

    @Operation(summary = "모든 카탈로그 조회")
    @GetMapping
    public ResponseEntity<ResponseWrapper<List<SoftwareCatalogDTO>>> getAllCatalogs() {
        List<SoftwareCatalogDTO> catalogs = catalogService.getAllCatalogs();
        return ResponseEntity.ok(new ResponseWrapper<>(catalogs));
    }

    @Operation(summary = "카탈로그 업데이트")
    @PutMapping("/{catalogId}")
    public ResponseEntity<ResponseWrapper<SoftwareCatalogDTO>> updateCatalog(
            @PathVariable Long catalogId,
            @RequestParam String source,
            @RequestBody String jsonData,
            @RequestParam String username,
            @RequestBody SoftwareCatalogDTO catalogDTO) {
        SoftwareCatalogDTO updatedCatalog = catalogService.updateCatalog(catalogId, source, jsonData, username, catalogDTO);
        return ResponseEntity.ok(new ResponseWrapper<>(updatedCatalog));
    }

    @Operation(summary = "카탈로그 삭제")
    @DeleteMapping("/{catalogId}")
    public ResponseEntity<ResponseWrapper<Void>> deleteCatalog(@PathVariable Long catalogId) {
        catalogService.deleteCatalog(catalogId);
        return ResponseEntity.ok(new ResponseWrapper<>(ResponseCode.OK));
    }

    @Operation(summary = "Nexus 정보를 포함한 모든 카탈로그 조회")
    @GetMapping("/combined")
    public ResponseEntity<ResponseWrapper<List<CombinedCatalogDTO>>> getAllCatalogsWithNexusInfo() {
        List<CombinedCatalogDTO> combinedCatalogs = catalogService.getAllCatalogsWithNexusInfo();
        return ResponseEntity.ok(new ResponseWrapper<>(combinedCatalogs));
    }

    @Operation(summary = "Nexus 정보를 포함한 특정 카탈로그 조회")
    @GetMapping("/{catalogId}/combined")
    public ResponseEntity<ResponseWrapper<CombinedCatalogDTO>> getCatalogWithNexusInfo(@PathVariable Long catalogId) {
        CombinedCatalogDTO combinedCatalog = catalogService.getCatalogWithNexusInfo(catalogId);
        return ResponseEntity.ok(new ResponseWrapper<>(combinedCatalog));
    }
     */
    // @ApiOperation(value="software catalog list(all)", notes="software catalog 리스트 불러오기")
    // @Operation(summary = "get software catalog list")
    // @GetMapping
    // public List<SoftwareCatalogDTO> getCatalogList(@RequestParam(required = false) String title){
    //     if(StringUtils.isEmpty(title)){
    //         return catalogService.getCatalogList();
    //     }else {
    //         return catalogService.getCatalogListSearch(title);
    //     }
    // }

    // @Operation(summary = "software catalogd detail(and reference)")
    // @ApiOperation(value="software catalog detail", notes="software catalog 내용 확인(연결된 정보들까지)")
    // @GetMapping("/{catalogIdx}")
    // public SoftwareCatalogDTO getCatalog(@PathVariable Long catalogIdx){
    //     return catalogService.getCatalog(catalogIdx);
    // }

    // @Operation(summary = "create software catalog", description = "Insert a software catalog with an optional icon file.")
    // @ApiOperation(value="software catalog insert", notes="software catalog 등록")
    // @PostMapping() 
    // public SoftwareCatalogDTO createCatalog(
    //     @RequestPart(value = "catalogDto") SoftwareCatalogDTO catalogDto)
    // {
    //     return catalogService.createCatalog(catalogDto);
    // }

    // @Operation(summary = "delete software catalog")
    // @ApiOperation(value="software catalog delete", notes="software catalog 삭제")
    // @DeleteMapping("/{catalogIdx}")
    // public boolean deleteCatalog(@PathVariable Long catalogIdx){
    //     return catalogService.deleteCatalog(catalogIdx);
    // }

    // // @Operation(summary = "update software catalog")
    // // @ApiOperation(value="software catalog update", notes="software catalog 수정")
    // // @PutMapping
    // // public boolean updateCatalog(@RequestBody CatalogDTO catalogDto, ){
    // //     return catalogService.updateCatalog(catalogDto);
    // // }

    // @Operation(summary = "update software catalog")
    // @ApiOperation(value="software catalog update", notes="software catalog 수정")
    // public SoftwareCatalogDTO updateCatalog(@RequestPart("catalogDto") SoftwareCatalogDTO catalogDto){
    //         return catalogService.updateCatalog(catalogDto);
    // }


}
