package com.esprit.microservices.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.esprit.microservices.Repo.EventRepo;
import com.esprit.microservices.entity.Event;


import com.esprit.microservices.entity.Event;

@Service

public class EventServices {

	@Autowired
	private EventRepo eventrepo;

	public Event saveEvent(@RequestBody Event event) {
		return eventrepo.save(event);
	}

	public Event getbyidnow(Long idevent) {
		System.out.println("saved");
		return eventrepo.findById(idevent).orElse(null);
	}
	public List<Event> retrieveAllEvent() {
		// TODO Auto-generated method stub
		return (List<Event>) this.eventrepo.findAll();
	}
	public void deleteEvent(Long id) {
		 this.eventrepo.deleteById(id);
	}

	
	public Event updateEvent(Event c) {
		return this.eventrepo.save(c);
	}
}
