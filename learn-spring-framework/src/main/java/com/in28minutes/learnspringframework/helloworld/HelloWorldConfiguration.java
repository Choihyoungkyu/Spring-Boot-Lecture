package com.in28minutes.learnspringframework.helloworld;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

// Eliminate verbosity in creating Java Beans
// Public accessor methods, contructor, equals, hashcode and toString are automatically created.
// Released in JDK 16
record Person (String name, int age, Address address) {};

record Address (String firstLine, String city) {};

@Configuration
public class HelloWorldConfiguration {
	
	@Bean
	public String name() {
		return "Ranga";
	}
	
	@Bean
	public int age() {
		return 15;
	}
	
	@Bean
	@Primary
	public Person person() {
		var person = new Person("Ravi", 20, new Address("만남의거리15", "울산광역시"));
		return person;
	}
	
	@Bean
	public Person person2MethodCall() {
		return new Person(name(), age(), address());	// name, age, address
	}
	
	@Bean
	public Person person3Parameters(String name, int age, Address address3) {
		return new Person(name, age, address3);	// name, age, address
	}
	
	@Bean
	public Person person4Parameters(String name, int age, Address address) {
		return new Person(name, age, address);	// name, age, address
	}
	
	@Bean
	public Person person5Qualifier(String name, int age, @Qualifier("address3qualifier") Address address3) {
		return new Person(name, age, address3);	// name, age, address
	}
	
	@Bean(name = "address2")
	@Primary
	public Address address() {
		var address = new Address("지귀로59번길 13-8", "창원시 의창구");
		return address;
	}
	
	@Bean(name = "address3")
	@Qualifier("address3qualifier")
	public Address address3() {
		var address = new Address("Main Street", "London");
		return address;
	}
}
