package com.example.backend.dto;

public record ContactRequestDTO(
        String contactName,
        String contactEmail,
        String contactPhone
) {}
