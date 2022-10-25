package tn.esprit.micro.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.esprit.micro.entity.Association;

@Repository
public interface AssociationRepo extends JpaRepository<Association, Long> {


}
