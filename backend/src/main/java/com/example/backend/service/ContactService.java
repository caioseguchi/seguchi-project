package com.example.backend.service;

import com.example.backend.model.Contact;
import com.example.backend.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactService {
    @Autowired
    private ContactRepository contactRepository;

    //Save Contact
    public Contact postContact(Contact contact){
        return contactRepository.save(contact);
    }

    //Get all Contacts
    public List<Contact> getAllContact(){
        return contactRepository.findAll();
    }

    //Get by id
    public Contact getContactById(Long id){
        return contactRepository.findById(id).orElse(null);
    }

    //Update
    public Contact updateContact(Contact contact){
        return contactRepository.save(contact);
    }

    //Delete
    public void deleteContact(Long id){
        contactRepository.deleteById(id);
    }
}
