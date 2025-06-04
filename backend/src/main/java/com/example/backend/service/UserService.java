package com.example.backend.service;

import com.example.backend.exception.EmailAlreadyInUseException;
import com.example.backend.exception.UserNotFoundException;
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
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new EmailAlreadyInUseException(user.getEmail());
        }
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
                   return userRepository.save(user);
                })
        .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
    }

    //Delete user
    public void deleteUser(UUID id){
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException("User with id" + id + "not found");
        }
        userRepository.deleteById(id);
    }

    //search by name
    public List<User> searchByName(String name) {
        List<User> users = userRepository.findByNameContainingIgnoreCase(name);
        if (users.isEmpty()){
            throw new UserNotFoundException("No users found with name: " + name);
        }
        return users;
    }

    //Search by email
    public List<User> searchByEmail(String email){
        List<User> users = userRepository.findByEmailContainingIgnoreCase(email);
        if (users.isEmpty()){
            throw new RuntimeException("Nos users found with email: " + email);
        }
        return users;
    }

}
