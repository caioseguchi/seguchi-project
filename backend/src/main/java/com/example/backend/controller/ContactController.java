package com.example.backend.controller;

import com.example.backend.model.Contact;
import com.example.backend.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api-contact")
@CrossOrigin("*")
public class ContactController {
    @Autowired
    private ContactService contactService;

    @PostMapping
    public Contact postContact(@RequestBody Contact contact){
        return contactService.postContact(contact);
    }
}
