package com.example.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user2")
public class UserController2 {
    @GetMapping
    public ResponseEntity<String> getUser(){
        return ResponseEntity.ok("success");
    }
}
