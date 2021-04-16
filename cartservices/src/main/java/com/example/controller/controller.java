package com.example.controller;

import com.example.Services.cartService;
import com.example.model.AddtocartDto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class controller {
 
    @Autowired
    private cartService service;

    @PostMapping("/add")
    public ResponseEntity<?> addToCart(@RequestBody AddtocartDto addToCartDto, @RequestParam("userid") int user_id) throws Exception 
    {
        return null;
        
    }

}
