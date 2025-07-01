package com.example.backend.dto;

public record ContactDTO(
        Long contactI,
        String contactName,
        String contactEmail,
        String contactPhone) {
}
