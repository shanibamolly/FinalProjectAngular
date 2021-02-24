package com.pack.PolicyManagement.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="policy")
public class Policy {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String name;
	@Column(name="type")
	@Enumerated(EnumType.STRING)
	private Type type;
	private long duration;
	private long amount;
	

	
	public Policy(Long id, String name, Type type, long duration, long amount) {
		super();
		this.id = id;
		this.name = name;
		this.type = type;
		this.duration = duration;
		this.amount = amount;
	}
	
	public Policy(String name, Type type, long duration, long amount) {
		super();
		this.name = name;
		this.type = type;
		this.duration = duration;
		this.amount = amount;
	}
	
	public Policy() {
		super();
	}
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public Type getType() {
		return type;
	}
	
	public void setType(Type type) {
		this.type = type;
	}
	
	public long getDuration() {
		return duration;
	}
	
	public void setDuration(long duration) {
		this.duration = duration;
	}
	
	public long getAmount() {
		return amount;
	}
	
	public void setAmount(long amount) {
		this.amount = amount;
	}

	
	
	
	
		
}