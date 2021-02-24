package com.pack.PolicyManagement.controller;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pack.PolicyManagement.dao.PolicyRepository;
import com.pack.PolicyManagement.dao.UserRepository;
import com.pack.PolicyManagement.model.Policy;
import com.pack.PolicyManagement.model.User;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/apii")
public class UserController {

	private Logger log=LoggerFactory.getLogger(UserController.class);

	@Autowired	
	UserRepository repository;

	@Autowired
	PolicyRepository policyrepository;

	@PostMapping(value = "/users")
	public ResponseEntity<User> postUser(@RequestBody User user) {
		try {
			log.info("welcome to postUser");
			System.out.println(user.getId());
			User _user = repository.save(new User(user.getId(),user.getFirstname(),user.getLastname(),
					user.getAge(),user.getGender(),user.getContactno(),user.getPassword()));
			return new ResponseEntity<>(_user, HttpStatus.CREATED);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}

	@GetMapping(value = "users/name/{name}")
	public ResponseEntity<List<Policy>> findByName(@PathVariable("name") String name) {
		try {
			log.info("welcome to findByName");
			List<Policy> policy = policyrepository.findByName(name);

			if (policy.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(policy, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}

	@GetMapping(value = "users/duration/{duration}")
	public ResponseEntity<List<Policy>> findByDuration(@PathVariable long duration) {
		try {
			log.info("welcome to findByDuration");
			List<Policy> policy = policyrepository.findByDuration(duration);
			if (policy.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(policy, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}

	@GetMapping(value = "users/id/{id}")
	public ResponseEntity<Policy> findById(@PathVariable long id) {
		try {
			log.info("welcome to findById");
			Optional<Policy> policy = policyrepository.findById(id);
			if(policy.isPresent()){
				return new ResponseEntity<>(policy.get(),HttpStatus.OK);
			}
			else{
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		}catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}

	@GetMapping("/users/{id}")
	public ResponseEntity<Policy> getPolicyById(@PathVariable("id") long id){
		log.info("welcome to getPolicyById");
		Optional<Policy> policyData=policyrepository.findById(id);
		if(policyData.isPresent()){
			return new ResponseEntity<>(policyData.get(),HttpStatus.OK);
		}
		else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("users/checklogin/{id}/{password}")
	public ResponseEntity<User> getUserById(@PathVariable("id") long id,@PathVariable("password") String password){
		log.info("welcome to getUserById");
		Optional<User> userData=repository.findById(id);
		if((userData.get().getId().equals(id))&&(userData.get().getPassword().equals(password))) {
			return new ResponseEntity<>(HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}	
	
	@GetMapping("users/status/{id}")
	public ResponseEntity<User> getById(@PathVariable("id") Long id){
		try {
			log.info("Welcome to getById");
	        repository.readByStatus(id); 
	        return new ResponseEntity<>(HttpStatus.OK);
	    }
		catch(Exception e) {
	    	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	}
		
}