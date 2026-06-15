
package com.example.ems.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.ems.entity.User;
import com.example.ems.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User register(User user) {

        Optional<User> existingUser =
                repository.findByEmail(user.getEmail());

        if(existingUser.isPresent()) {
            throw new RuntimeException(
                    "Email already exists");
        }

        user.setPassword(
                passwordEncoder.encode(
                        user.getPassword()));

        return repository.save(user);
    }

    public boolean login(
            String email,
            String password) {

        Optional<User> user =
                repository.findByEmail(email);

        if(user.isEmpty()) {
            return false;
        }

        return passwordEncoder.matches(
                password,
                user.get().getPassword());
    }
}

