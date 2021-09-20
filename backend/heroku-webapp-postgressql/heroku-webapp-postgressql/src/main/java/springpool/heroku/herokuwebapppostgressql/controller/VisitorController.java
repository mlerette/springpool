package springpool.heroku.herokuwebapppostgressql.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springpool.heroku.herokuwebapppostgressql.model.Visitor;
import springpool.heroku.herokuwebapppostgressql.repository.VisitorRepository;
import springpool.heroku.herokuwebapppostgressql.exception.ResourceNotFoundException;


@CrossOrigin(origins = "../frontend")
@RestController
@RequestMapping("/api/v1/")
public class VisitorController {

	
	//WE WANT TO IMPLEMENT THESE REST APIS
	//GET visitorS
	//GET visitorS BY ID
	//SAVE visitor
	//UPDATE visitor 
	//DELETE visitor
	
	@Autowired
	private VisitorRepository visitorRepository;
	
	//get
	
	@GetMapping("visitors")
	public List<Visitor> getAllVisitor() {
		return this.visitorRepository.findAll();
	}
	
	
	
	//get visitor by id
	@GetMapping("/visitors/{id}")
	public ResponseEntity<Visitor> getVisitorById(@PathVariable(value = "id") Long visitorID)
		throws ResourceNotFoundException {
		Visitor visitor = visitorRepository.findById(visitorID)
				.orElseThrow(() -> new ResourceNotFoundException("Visitor not found for this id ::" + visitorID));
			
				return ResponseEntity.ok().body(visitor);				
	}
	
	//save visitor
	@PostMapping("/visitors")
	public Visitor createVisitor(@RequestBody Visitor visitor) {
		return this.visitorRepository.save(visitor);
	}
	
	//update visitor 
	@PutMapping("visitors/{id}")
	public ResponseEntity<Visitor> updateVisitor(@PathVariable(value = "id") Long visitorID,
			@Valid @RequestBody Visitor visitorDetails) throws ResourceNotFoundException {
		
		Visitor visitor = visitorRepository.findById(visitorID)
				.orElseThrow(() -> new ResourceNotFoundException("Visitor not found for this id ::" + visitorID));
		
		visitor.setMessage(visitorDetails.getMessage());
		visitor.setFirstName(visitorDetails.getFirstName());
		visitor.setLastName(visitorDetails.getLastName());
		
		return ResponseEntity.ok(this.visitorRepository.save(visitor));
		
	}
	
	//delete visitor
	
	@DeleteMapping("visitors/{id}")
	public Map<String, Boolean> deleteVisitor(@PathVariable(value = "id") Long visitorID) throws ResourceNotFoundException { 
		
		Visitor visitor = visitorRepository.findById(visitorID)
				.orElseThrow(() -> new ResourceNotFoundException("Visitor not found for this id ::" + visitorID));
		
		this.visitorRepository.delete(visitor);
		
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		
		return response;
	}
	
	}
	
	
	
	

