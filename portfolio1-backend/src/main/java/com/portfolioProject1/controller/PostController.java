package com.portfolioProject1.controller;

import com.portfolioProject1.pojo.PersonData;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class PostController {


    @GetMapping("/test")
    public PersonData test(){
        PersonData personData = new PersonData();
        personData.setName("john");
        personData.setAge(20);
        personData.setGender("male");

        return personData;
    }



}
