package com.example.backend.dto;

public record ContactDTO(
        Long contactId,
        String contactName,
        String contactEmail,
        String contactPhone
) {}
