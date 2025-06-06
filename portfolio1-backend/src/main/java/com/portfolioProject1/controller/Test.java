package com.portfolioProject1.controller;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class Test {

    public void test(){
        System.out.println("Test function springboot working");
    }

}
