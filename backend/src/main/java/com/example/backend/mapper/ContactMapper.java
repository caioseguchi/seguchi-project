package com.example.backend.mapper;

import com.example.backend.dto.ContactDTO;
import com.example.backend.dto.ContactRequestDTO;
import com.example.backend.model.Contact;

public class ContactMapper {

    public static ContactDTO toDTO(Contact contact) {
        return new ContactDTO(
                contact.getContactId(),
                contact.getContactName(),
                contact.getContactEmail(),
                contact.getContactPhone()
        );
    }

    public static Contact toEntity(ContactRequestDTO dto) {
        Contact contact = new Contact();
        contact.setContactName(dto.contactName());
        contact.setContactEmail(dto.contactEmail());
        contact.setContactPhone(dto.contactPhone());
        return contact;
    }

    public static void updateEntity(Contact contact, ContactRequestDTO dto) {
        contact.setContactName(dto.contactName());
        contact.setContactEmail(dto.contactEmail());
        contact.setContactPhone(dto.contactPhone());
    }
}

