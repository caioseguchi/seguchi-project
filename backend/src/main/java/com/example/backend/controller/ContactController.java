package com.example.backend.controller;

import com.example.backend.model.Contact;
import com.example.backend.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users/{userId}/contacts")
@CrossOrigin("*")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping
    public ResponseEntity<Contact> createContact(@PathVariable Long userId, @RequestBody Contact contact){
        return ResponseEntity.ok(contactService.createContact(userId, contact));
    }

    @GetMapping
    public List<Contact> getContactsByUser(@PathVariable Long userId){
        return contactService.getContactByUserId(userId);
    }

    @PutMapping("/{contactId}")
    public ResponseEntity<Contact> updateContact(@PathVariable Long userId, @PathVariable Long contactId, @RequestBody Contact contact){
        return ResponseEntity.ok(contactService.updateContact(userId,contactId, contact));
    }

    @DeleteMapping("/{contactId}")
    public ResponseEntity<Void> deleteContact(@PathVariable Long userId, @PathVariable Long contactId) {
        contactService.deleteContact(userId, contactId);
        return ResponseEntity.noContent().build();
    }
}

