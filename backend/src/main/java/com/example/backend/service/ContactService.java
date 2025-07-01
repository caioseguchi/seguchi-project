package com.example.backend.service;

import com.example.backend.model.Contact;
import com.example.backend.model.User;
import com.example.backend.repository.ContactRepository;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactService {

    //Constructor
    @Autowired
    private ContactRepository contactRepository;

    @Autowired
    private UserRepository userRepository;

    //Methods

    //Post
    public Contact createContact(Long userId, Contact contact){
        User authenticatedUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (!authenticatedUser.getId().equals(userId)) {
            throw new AccessDeniedException("Access denied");
        }


        User user = userRepository.findById(userId)
                .orElseThrow(()-> new RuntimeException("User not found"));

        contact.setUser(authenticatedUser);
        return contactRepository.save(contact);
    }

    //Get All
    public List<Contact> getContactByUserId(long userId){
        return contactRepository.findByUserId(userId);
    }

    //Put
    public Contact updateContact(Long userId, Long contactId, Contact updateContact){
        Contact contact = contactRepository.findById(contactId).orElseThrow(()-> new RuntimeException("Contact not found"));

        if (!contact.getUser().getId().equals(userId)){
            throw new RuntimeException("Access denied");
        }

        contact.setContactName(updateContact.getContactName());
        contact.setContactEmail(updateContact.getContactEmail());
        contact.setContactPhone(updateContact.getContactPhone());

        return contactRepository.save(contact);
    }

    //Delete
    public void deleteContact(Long userId, Long contactId){
        Contact contact = contactRepository.findById(contactId).orElseThrow(()-> new RuntimeException("Contact not found"));

        if (!contact.getUser().getId().equals(userId)) {
            throw new RuntimeException("Access denied");
        }

        contactRepository.delete(contact);
    }
}//class
