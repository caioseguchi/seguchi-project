package com.example.backend.controller;

import com.example.backend.dto.RegisterRequestDTO;
import com.example.backend.dto.ResponseDTO;
import com.example.backend.infra.security.TokenService;
import com.example.backend.model.User;
import com.example.backend.model.UserRole;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;
import java.util.Set;

@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    TokenService tokenService;

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody RegisterRequestDTO body){
        Optional<User> user = this.userRepository.findByEmail(body.email());

        if(user.isEmpty()) {
            User newUser = new User();
            newUser.setPassword(passwordEncoder.encode(body.password()));
            newUser.setEmail(body.email());
            newUser.setName(body.name());
            newUser.setRoles(Set.of(UserRole.ADMIN));
            this.userRepository.save(newUser);

            String token = this.tokenService.generetateToken(newUser);
            return ResponseEntity.ok(new ResponseDTO(newUser.getId(), newUser.getName(), token));
        }
        return ResponseEntity.badRequest().build();
    }
}
