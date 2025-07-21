package com.example.backend.infra.config;

import com.example.backend.model.User;
import com.example.backend.model.UserRole;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Set;

@Configuration
public class AdminInitializer {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Bean
    public CommandLineRunner createAdmin() {
        return args -> {
            String adminEmail = "admin@admin.com";

            if (userRepository.findByEmail(adminEmail).isEmpty()) {
                User admin = new User();
                admin.setName("Admin Master");
                admin.setEmail(adminEmail);
                admin.setPassword(passwordEncoder.encode("admin123")); // Use senha forte em produção
                admin.setRoles(Set.of(UserRole.ADMIN)); // Define role ADMIN

                userRepository.save(admin);
                System.out.println("✅ Admin master criado com sucesso.");
            } else {
                System.out.println("🔁 Admin master já existe.");
            }
        };
    }
}

