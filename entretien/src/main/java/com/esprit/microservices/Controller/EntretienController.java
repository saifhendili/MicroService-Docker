package com.esprit.microservices.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.esprit.microservices.Services.EntretienServices;
import com.esprit.microservices.entity.Entretien;

@RestController
@RequestMapping("/entretien")
public class EntretienController {
	
	@Autowired
	private EntretienServices entretienservices;
	
	
	@PostMapping("/add")

	public Entretien saveEntretien(@RequestBody Entretien entretien)
	{
		
		return entretienservices.saveEntretien(entretien);
	}
	@GetMapping("/{id}")
	public Entretien findEntretien(@PathVariable("id") Long entretien)
	{
		return entretienservices.getbyidnow(entretien);
	}


	@GetMapping("/retrieveall")
	@ResponseBody
	public List<Entretien> get() {
	List<Entretien> listentretien= entretienservices.retrieveAll();
	return listentretien; 
	}
	
	@PutMapping("/update")
	@ResponseBody
	public Entretien update(@RequestBody Entretien entretien) {
		return entretienservices.update(entretien);
	}
	
	
	@DeleteMapping("/remove/{entretien-id}")
    @ResponseBody
	public void remove(@PathVariable("entretien-id") Long entretienid) {
		entretienservices.delete(entretienid);
	}

}
