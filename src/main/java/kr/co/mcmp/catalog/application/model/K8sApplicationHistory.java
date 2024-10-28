package kr.co.mcmp.catalog.application.model;

import java.time.LocalDateTime;

import javax.persistence.*;

import kr.co.mcmp.catalog.CatalogEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name="k8s_application_history")
public class K8sApplicationHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String namespace;
    @Column(name="cluster_name", nullable = false)
    private String clusterName;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "catalog_id", nullable = false)
    private CatalogEntity catalog;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private ApplicationStatus status; 
    
    @Column(name = "installed_at")
    private LocalDateTime installedAt;
    @Column(name = "uninstalled_at")
    private LocalDateTime uninstalledAt;
    @Column(name="updated_at")
    private LocalDateTime updatedAt;
}
