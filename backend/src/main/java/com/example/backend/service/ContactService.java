package com.example.backend.service;

import com.example.backend.dto.ContactDTO;
import com.example.backend.dto.ContactRequestDTO;
import com.example.backend.mapper.ContactMapper;
import com.example.backend.model.Contact;
import com.example.backend.model.User;
import com.example.backend.repository.ContactRepository;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ContactService {

    //Constructor
    @Autowired
    private ContactRepository contactRepository;

    @Autowired
    private UserRepository userRepository;

    //Methods

    //Post
    public ContactDTO createContact(Long userId, ContactRequestDTO dto){
        User authenticatedUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (!authenticatedUser.getId().equals(userId)) {
            throw new AccessDeniedException("Access denied");
        }


        //User user = userRepository.findById(userId)
          //      .orElseThrow(()-> new RuntimeException("User not found"));

        Contact contact = ContactMapper.toEntity(dto);
        contact.setUser(authenticatedUser);
        return ContactMapper.toDTO(contactRepository.save(contact));
    }

    //Get All
    public List<ContactDTO> listContacts(long userId){
        User authenticatedUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (!authenticatedUser.getId().equals(userId)) {
            throw new AccessDeniedException("Access denied");
        }

        return contactRepository.findByUserId(userId)
                .stream()
                .map(ContactMapper::toDTO)
                .collect(Collectors.toList());
    }

    //Put
    public ContactDTO updateContact(Long userId, Long contactId, ContactRequestDTO dto){
        User authenticatedUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        Contact contact = contactRepository.findById(contactId).orElseThrow(()-> new RuntimeException("Contact not found"));

        if (!contact.getUser().getId().equals(userId) || !authenticatedUser.getId().equals(userId)){
            throw new RuntimeException("Access denied");
        }

        ContactMapper.updateEntity(contact, dto);
        return  ContactMapper.toDTO(contactRepository.save(contact));
    }

    //Delete
    public void deleteContact(Long userId, Long contactId){
        User authenticatedUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        Contact contact = contactRepository.findById(contactId).orElseThrow(()-> new RuntimeException("Contact not found"));

        if (!contact.getUser().getId().equals(userId)) {
            throw new RuntimeException("Access denied");
        }

        contactRepository.delete(contact);
    }
}//class
