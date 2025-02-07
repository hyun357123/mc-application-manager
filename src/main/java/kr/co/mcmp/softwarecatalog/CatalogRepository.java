package kr.co.mcmp.softwarecatalog;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CatalogRepository extends JpaRepository<SoftwareCatalog, Long> {

    // void deleteById(Integer catalogIdx);

    // List<SoftwareCatalog> findByTitleLikeIgnoreCase(String title);

    // Optional<CatalogEntity> findByTitleAndVersion(String title, String version);

    // List<CatalogEntity> findByTitleContainingIgnoreCaseAndVersion(String title, String version);

    @Query("SELECT sc FROM SoftwareCatalog sc LEFT JOIN FETCH sc.catalogRefs")
    List<SoftwareCatalog> findAllWithCatalogRefs();

    @Query("SELECT sc FROM SoftwareCatalog sc LEFT JOIN FETCH sc.catalogRefs WHERE sc.id = :id")
    Optional<SoftwareCatalog> findByIdWithCatalogRefs(@Param("id") Long id);

    @Query("SELECT sc FROM SoftwareCatalog sc LEFT JOIN FETCH sc.catalogRefs WHERE LOWER(sc.title) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    List<SoftwareCatalog> findByTitleContainingIgnoreCaseWithCatalogRefs(@Param("keyword") String keyword);
}
