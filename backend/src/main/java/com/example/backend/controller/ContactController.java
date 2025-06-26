package com.example.backend.controller;

import com.example.backend.model.Contact;
import com.example.backend.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api-contact")
@CrossOrigin("*")
public class ContactController {
    @Autowired
    private ContactService contactService;

    //Save Contact
    @PostMapping("/contact")
    public Contact postContact(@RequestBody Contact contact){
        return contactService.postContact(contact);
    }

    //Get all contacts
    @GetMapping("/contact")
    private List<Contact> getAllContacts(){
        return contactService.getAllContact();
    }

    //Get by id
    @GetMapping("/contact/{id}")
    public ResponseEntity<Contact> getContactById(@PathVariable Long id){
        Contact contact = contactService.getContactById(id);
        if (contact == null){
            return ResponseEntity.notFound().build();
        } return ResponseEntity.ok(contact);
    }

    //Update
    @PutMapping("/contact/{id}")
    public ResponseEntity<Contact> updateContact(@PathVariable Long id, @RequestBody Contact contact){
        Contact existingContact = contactService.getContactById(id);
        if (existingContact == null){
            return ResponseEntity.notFound().build();
        }
        existingContact.setName(contact.getName());
        existingContact.setEmail(contact.getEmail());
        existingContact.setPhone(contact.getPhone());
        Contact updateContact = contactService.updateContact(existingContact);
        return ResponseEntity.ok(updateContact);
    }

    //Delete
    @DeleteMapping("/contact/{id}")
    public ResponseEntity<?> deleteContact(@PathVariable Long id){
        Contact existingContact = contactService.getContactById(id);
        if (existingContact == null)
            return ResponseEntity.notFound().build();
        contactService.deleteContact(id);
        return ResponseEntity.ok().build();
    }

}
