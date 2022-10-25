package tn.esprit.micro.Controller;

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

import tn.esprit.micro.Services.AssociationServices;
import tn.esprit.micro.entity.Association;

@RestController
@RequestMapping("/Association")
public class AssociationController {
	
	@Autowired
	private AssociationServices associationservices;
	
	
	@PostMapping("/add")

	public Association saveAssociation(@RequestBody Association association)
	{
		
		return associationservices.saveAssociation(association);
	}
	@GetMapping("/{id}")
	public Association findAssociation(@PathVariable("id") Long idassociation)
	{
		return associationservices.getbyidnow(idassociation);
	}
	
	@GetMapping("/retrieveallassociation")
	@ResponseBody
	public List<Association> getassociation() {
	List<Association> listproduits = associationservices.retrieveAllassociation();
	return listproduits; 
	}
	
	
	
	@PutMapping("/modifyassociation")
	@ResponseBody
	public Association modifyassicuatuin(@RequestBody Association association) {
		return associationservices.updateassocaition(association);
	}

	
	
	
	@DeleteMapping("/remove-association/{association-id}")
    @ResponseBody
	public void removeassociation(@PathVariable("association-id") Long associationid) {
		associationservices.deleteassociation(associationid);
	}
}
