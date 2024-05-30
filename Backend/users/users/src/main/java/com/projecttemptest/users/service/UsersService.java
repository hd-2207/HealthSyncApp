package com.projecttemptest.users.service;

import com.projecttemptest.users.entity.Users;
import com.projecttemptest.users.exception.UserServiceException;

import jakarta.servlet.http.HttpServletRequest;

public interface UsersService {
    void registerUser(Users user) throws UserServiceException;
    boolean loginUser(Users user, HttpServletRequest request) throws UserServiceException;
    void logoutUser(HttpServletRequest request) throws UserServiceException;
    boolean isUsernameExists(String username) throws UserServiceException;
    boolean isEmailExists(String email) throws UserServiceException;
    Users getUserById(Long id) throws UserServiceException;
}




/*package com.projecttemptest.users.service;

import com.projecttemptest.users.entity.Users;

import jakarta.servlet.http.HttpServletRequest;




public interface UsersService {
    void registerUser(Users user);
    boolean loginUser(Users user, HttpServletRequest request);
    void logoutUser(HttpServletRequest request);
    boolean isUsernameExists(String username); 
    boolean isEmailExists(String email);
    Users getUserById(Long id); 
}*/