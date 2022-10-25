package tn.esprit.micro.Services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import tn.esprit.micro.Repo.AssociationRepo;
import tn.esprit.micro.entity.Association;


@Service

public class AssociationServices {

	@Autowired
	private AssociationRepo associationrepo;

	public Association saveAssociation(@RequestBody Association association) {
		return associationrepo.save(association);
	}

	public Association getbyidnow(Long idassociation) {
		System.out.println("saved");
		return associationrepo.findById(idassociation).orElse(null);
	}
	
	
	
	

	public void deleteassociation(Long id) {
		 this.associationrepo.deleteById(id);
	}

	
	public Association updateassocaition(Association c) {
		return this.associationrepo.save(c);
	}


	public List<Association> retrieveAllassociation() {
		// TODO Auto-generated method stub
		return (List<Association>) this.associationrepo.findAll();
	}


}
