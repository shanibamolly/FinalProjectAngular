package com.pack.PolicyManagement.controller;

import java.util.ArrayList;
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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pack.PolicyManagement.dao.AdminRepository;
import com.pack.PolicyManagement.dao.PolicyRepository;
import com.pack.PolicyManagement.model.Admin;
import com.pack.PolicyManagement.model.Policy;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api")
public class AdminController {

	private Logger log=LoggerFactory.getLogger(AdminController.class);

	@Autowired	
	AdminRepository repository;

	@Autowired
	PolicyRepository policyrepository;	

	@PostMapping(value = "/admins")
	public ResponseEntity<Admin> postAdmin(@RequestBody Admin admin) {
		System.out.println("came ");
		try {
			log.info("welcome to postAdmin");

			Admin _admin=repository.save(admin);
			/*Admin _admin = repository.save(new Admin(admin.getId(),admin.getFirstname(),admin.getLastname(),
					admin.getAge(),admin.getGender(),admin.getContactno(),admin.getPassword()));*/
			//System.out.println("got it");
			return new ResponseEntity<>(_admin, HttpStatus.CREATED);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}

	@PostMapping(value = "/admins/policy")
	public ResponseEntity<Policy> postPolicy(@RequestBody Policy policy) {
		try {
			log.info("welcome to postPolicy");
			Policy _policy = policyrepository.save(new Policy(policy.getName(),policy.getType(),policy.getDuration(),policy.getAmount()));
			return new ResponseEntity<>(_policy, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}

	@GetMapping("/admins")
	public ResponseEntity<List<Policy>>getAllPolicies(){
		List<Policy> policies=new ArrayList<Policy>();
		try {
			log.info("welcome to getAllPolicies");
			policyrepository.findAll().forEach(policies::add);
			if(policies.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(policies,HttpStatus.OK);
		}catch(Exception e) {
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/admins/{id}")
	public ResponseEntity<Policy> getPolicyById(@PathVariable("id") long id){
		log.info("welcome to getPolicyById");
		Optional<Policy> policyData=policyrepository.findById(id);
		if(policyData.isPresent()) {
			return new ResponseEntity<>(policyData.get(),HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}


	@PutMapping(value="/admins/update")
	public Policy updatePolicy(@RequestBody Policy policy)	{
		log.info("welcome to updatePolicy");
		Policy policy1=policyrepository.save(new Policy(policy.getId(),policy.getName(),policy.getType(),policy.getDuration(),policy.getAmount()));
		return policy1;
	}

	@GetMapping("admins/checklogin/{id}/{password}")
	public ResponseEntity<Admin> getAdminById(@PathVariable("id") long id,@PathVariable("password") String password){
		log.info("welcome to getAdminById");
		Optional<Admin> adminData=repository.findById(id);
		if((adminData.get().getId().equals(id))&&(adminData.get().getPassword().equals(password))) {
			System.out.println("reached");
			return new ResponseEntity<>(HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}		
	}
}