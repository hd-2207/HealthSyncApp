package com.projecttemptest.users.controller;

import com.projecttemptest.users.entity.Users;
import com.projecttemptest.users.service.UsersService;

import jakarta.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000") 
@RequestMapping("/users")
public class UsersController {

    @Autowired
    private UsersService userService;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody Users user) {
        if (userService.isUsernameExists(user.getUsername())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Username already exists");
        }
        if (userService.isEmailExists(user.getEmail())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already exists");
        }
        userService.registerUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully");
    }
    @PostMapping("/login")
    public String loginUser(@RequestBody Users loginUser, HttpServletRequest request) {
        if (userService.loginUser(loginUser, request)) {
            return "Login successful";
        } else {
            return "Invalid username or password";
        }
    }
    @PostMapping("/logout")
    public ResponseEntity<String> logoutUser(HttpServletRequest request) {
        userService.logoutUser(request);
        return ResponseEntity.ok("Logout successful");
    }
   
    /*
    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody Users user) {
        if (userService.loginUser(user)) {
            return ResponseEntity.ok("Login successful");
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
    }
    */
    @GetMapping("/{id}")
    public ResponseEntity<Users> getUserById(@PathVariable Long id) {
        Users user = userService.getUserById(id);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
