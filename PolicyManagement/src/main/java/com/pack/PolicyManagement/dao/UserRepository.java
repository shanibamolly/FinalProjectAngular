package com.pack.PolicyManagement.dao;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.pack.PolicyManagement.model.User;

public interface UserRepository extends CrudRepository<User, Long> {

	@Transactional
    @Modifying
    @Query("Update User p set p.status='PAID' WHERE p.id=:id")
    public void readByStatus(@Param("id") Long id);
	
	

}
