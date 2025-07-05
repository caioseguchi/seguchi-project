package com.example.backend.controller;

import com.example.backend.dto.ContactDTO;
import com.example.backend.dto.ContactRequestDTO;
import com.example.backend.model.Contact;
import com.example.backend.service.ContactService;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
    public ResponseEntity<ContactDTO> createContact(
            @PathVariable Long userId,
            @RequestBody ContactRequestDTO dto){

        ContactDTO created = contactService.createContact(userId, dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @GetMapping
    public ResponseEntity<List<ContactDTO>> listContacts(@PathVariable Long userId) {
        return ResponseEntity.ok(contactService.listContacts(userId));
    }

    @PutMapping("/{contactId}")
    public ResponseEntity<ContactDTO> updateContact(
            @PathVariable Long userId,
            @PathVariable Long contactId,
            @RequestBody ContactRequestDTO dto){
        return ResponseEntity.ok(contactService.updateContact(userId,contactId,dto));
    }

    @DeleteMapping("/{contactId}")
    public ResponseEntity<Void> deleteContact(@PathVariable Long userId, @PathVariable Long contactId) {
        contactService.deleteContact(userId, contactId);
        return ResponseEntity.noContent().build();
    }
}
