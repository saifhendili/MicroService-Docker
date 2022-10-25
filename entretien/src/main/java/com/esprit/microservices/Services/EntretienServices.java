package com.esprit.microservices.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.esprit.microservices.Repo.EntretienRepo;
import com.esprit.microservices.entity.Entretien;

@Service

public class EntretienServices {

	@Autowired
	private EntretienRepo entretienrepo;

	public Entretien saveEntretien(@RequestBody Entretien entretien) {
		return entretienrepo.save(entretien);
	}

	public Entretien getbyidnow(Long identretien) {
		System.out.println("saved");
		return entretienrepo.findById(identretien).orElse(null);
	}

	public List<Entretien> retrieveAll() {
		// TODO Auto-generated method stub
		return (List<Entretien>) this.entretienrepo.findAll();
	}
	public void delete(Long id) {
		 this.entretienrepo.deleteById(id);
	}

	
	public Entretien update(Entretien c) {
		return this.entretienrepo.save(c);
	}
}
