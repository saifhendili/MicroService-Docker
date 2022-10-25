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

import com.esprit.microservices.Services.EventServices;
import com.esprit.microservices.entity.Event;




@RestController
@RequestMapping("/event")
public class EventController {
	
	@Autowired
	private EventServices eventservices;
	
	
	@PostMapping("/add")

	public Event saveEvent(@RequestBody Event event)
	{
		
		return eventservices.saveEvent(event);
	}
	@GetMapping("getbyidevent/{id}")
	public Event findEvent(@PathVariable("id") Long idevent)
	{
		return eventservices.getbyidnow(idevent);
	}
	
	@GetMapping("/retrieveallevent")
	@ResponseBody
	public List<Event> getevent() {
	List<Event> listevents = eventservices.retrieveAllEvent();
	return listevents; 
	}
	
	@PutMapping("/modifierevent")
	@ResponseBody
	public Event modifyevent(@RequestBody Event event) {
		return eventservices.updateEvent(event);
	}

	
	
	
	@DeleteMapping("/remove-event/{event-id}")
    @ResponseBody
	public void removeevent(@PathVariable("event-id") Long eventid) {
		eventservices.deleteEvent(eventid);
	}
}
