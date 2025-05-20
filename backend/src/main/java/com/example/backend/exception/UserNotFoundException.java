package com.example.backend.exception;

import java.util.UUID;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(UUID id) {
        super("Usuário com ID " + id + " não encontrado.");
    }
}
