package com.pack.PolicyManagement.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="users")
public class User {

	@Id
	//@GeneratedValue	
	private Long id;
	private String firstname;
	private String lastname;
	private int age;
	@Column(name="gender")
	@Enumerated(EnumType.STRING)
	private Gender gender;
	private String contactno;
	private String password;
	
	//@Column(columnDefinition = "boolean default false")
	//private boolean isLocked;
	@Column(length = 32, columnDefinition = "varchar(32) default 'PENDING'")
	@Enumerated(value = EnumType.STRING)
	private Status status  = Status.PENDING;
	
	
	
	public User(Long id, String firstname, String lastname, int age, Gender gender, String contactno,
			String password) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.age = age;
		this.gender = gender;
		this.contactno = contactno;
		this.password = password;
	}
	
	public User() {
		super();
	}
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getFirstname() {
		return firstname;
	}
	
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	
	public String getLastname() {
		return lastname;
	}
	
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	
	public int getAge() {
		return age;
	}
	
	public void setAge(int age) {
		this.age = age;
	}
	
	public Gender getGender() {
		return gender;
	}
	
	public void setGender(Gender gender) {
		this.gender = gender;
	}
	
	public String getContactno() {
		return contactno;
	}
	
	public void setContactno(String contactno) {
		this.contactno = contactno;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}

	
	public Status getStatus() {
		return status;
	}
	public void setStatus(Status status) {
		this.status = status;
	}
	
	
}