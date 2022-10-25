package com.esprit.microservices.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.esprit.microservices.Repo.BaladeRepo;
import com.esprit.microservices.entity.Balade;

@Service
public class BaladeServices {

	@Autowired
	private BaladeRepo baladerepo;

	public Balade saveBalade(@RequestBody Balade balade) {
		return baladerepo.save(balade);
	}

	public Balade getbyidnow(Long idbalade) {
		System.out.println("saved");
		return baladerepo.findById(idbalade).orElse(null);
	}

}
