package com.esprit.microservices.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.esprit.microservices.Services.BaladeServices;
import com.esprit.microservices.entity.Balade;

@RestController
@RequestMapping("/Balade")
public class BaladeController {
	
	@Autowired
	private BaladeServices baladeservices;
	
	
	@PostMapping("/add")

	public Balade saveBalade(@RequestBody Balade balade)
	{
		
		return baladeservices.saveBalade(balade);
	}
	
	@GetMapping("/{id}")
	public Balade findBalade(@PathVariable("id") Long idbalade)
	{
		return baladeservices.getbyidnow(idbalade);
	}
}
