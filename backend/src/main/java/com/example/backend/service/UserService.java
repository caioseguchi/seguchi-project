package com.example.backend.service;

import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    //Save
    public User createUser(User user){
        return userRepository.save(user);
    }

    //Find all
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    //Find User
    public Optional<User> getUserById(UUID id) {
        return userRepository.findById(id);
    }

    //Update User
    public User updateUser(UUID id, User updateUser){
        return userRepository.findById(id)
                .map(user ->{
                   user.setName(updateUser.getName());
                   user.setEmail(updateUser.getEmail());
                   user.setPassword(updateUser.getPassword());
                   user.setRole(updateUser.getRole());
                   return userRepository.save(user);
                })
        .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
    }

    //Delete user
    public void deleteUser(UUID id){
        userRepository.deleteById(id);
    }
}
