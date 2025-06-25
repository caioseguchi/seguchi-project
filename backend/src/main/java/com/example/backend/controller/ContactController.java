package com.example.backend.controller;

import com.example.backend.model.Contact;
import com.example.backend.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api-contact")
@CrossOrigin("*")
public class ContactController {
    @Autowired
    private ContactService contactService;

    //Save Contact
    @PostMapping
    public Contact postContact(@RequestBody Contact contact){
        return contactService.postContact(contact);
    }

    //Get all contacts
    @GetMapping
    private List<Contact> getAllContacts(){
        return contactService.getAllContact();
    }
}
