package com.example.backend.repository;

import com.example.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<User, UUID> {
    List<User> findByNameContainingIgnoreCase(String name);
    List<User> findByEmailContainingIgnoreCase(String email);

    Optional<User> findByEmail(String email);

    boolean existsById(UUID id);
    boolean existsByName(String name);
    boolean existsByEmail(String email);
}
