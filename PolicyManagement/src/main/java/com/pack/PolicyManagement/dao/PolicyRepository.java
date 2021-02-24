package com.pack.PolicyManagement.dao;

import java.util.List;
import org.springframework.data.repository.CrudRepository;

import com.pack.PolicyManagement.model.Policy;

public interface PolicyRepository extends CrudRepository<Policy, Long>{
	
	List<Policy> findByName(String type);
	
	List<Policy> findByDuration(long type);

	
}
