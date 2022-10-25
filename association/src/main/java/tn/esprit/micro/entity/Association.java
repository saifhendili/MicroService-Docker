package tn.esprit.micro.entity;


import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="association")
public class Association implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private Long id;
	private String nom;
	private String description;
	private String owner;
	private int nbdepersonne;

	private String picture;

	private String objective;

	public Association(String nom, String description, String owner, int nbdepersonne, String picture,
			String objective) {
		super();
		this.nom = nom;
		this.description = description;
		this.owner = owner;
		this.nbdepersonne = nbdepersonne;
		this.picture = picture;
		this.objective = objective;
	}

	


	
	
	
	
	
	

} 