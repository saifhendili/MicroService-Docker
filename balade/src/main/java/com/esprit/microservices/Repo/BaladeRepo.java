package com.esprit.microservices.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.esprit.microservices.entity.Balade;

@Repository
public interface BaladeRepo extends JpaRepository<Balade, Long> {


}
