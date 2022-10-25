package com.esprit.microservices.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.esprit.microservices.entity.Entretien;

@Repository
public interface EntretienRepo extends JpaRepository<Entretien, Long> {


}
