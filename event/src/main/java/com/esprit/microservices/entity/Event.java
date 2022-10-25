package com.esprit.microservices.entity;


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
@Table(name="event")

public class Event implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private Long id;
	private String nom;
	private String description;
	private String date;
	private Long nbvelo;

	private String picture;
    private String place;

    public Event(String nom, String description, String date, Long nbvelo, String picture,
			String place) {
		super();
		this.nom = nom;
		this.description = description;
		this.date = date;
		this.nbvelo = nbvelo;
		this.picture = picture;
		this.place = place;


    }
	
	
	
	
	

} 