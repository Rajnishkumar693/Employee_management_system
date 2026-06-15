
package com.example.ems.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.ems.entity.User;
import com.example.ems.service.UserService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private UserService service;

    @PostMapping("/register")
    public ResponseEntity<?> register(
            @RequestBody User user) {

        try {

            User savedUser =
                    service.register(user);

            return ResponseEntity.ok(savedUser);

        } catch (Exception e) {

            return ResponseEntity
                    .badRequest()
                    .body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public Map<String, String> login(
            @RequestBody User user) {

        Map<String, String> response =
                new HashMap<>();

        if (service.login(
                user.getEmail(),
                user.getPassword())) {

            response.put(
                    "message",
                    "Login Successful");

        } else {

            response.put(
                    "message",
                    "Invalid Credentials");
        }

        return response;
    }
}

