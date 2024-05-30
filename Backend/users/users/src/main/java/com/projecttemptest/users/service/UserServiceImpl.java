package com.projecttemptest.users.service;

import com.projecttemptest.users.entity.Users;
import com.projecttemptest.users.repository.UsersRepository;
import com.projecttemptest.users.exception.UserServiceException;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UsersService {

    @Autowired
    private UsersRepository userRepository;

    @Override
    public void registerUser(Users user) throws UserServiceException {
        try {
            userRepository.save(user);
        } catch (Exception e) {
            throw new UserServiceException("Error registering user", e);
        }
    }
    
    @Override
    public boolean loginUser(Users loginUser, HttpServletRequest request) throws UserServiceException {
        try {
            Users user = userRepository.findByUsername(loginUser.getUsername());
            if (user != null && loginUser.getPassword().equals(user.getPassword())) {
                HttpSession session = request.getSession(true);
                session.setAttribute("user", user);
                return true;
            }
            return false;
        } catch (Exception e) {
            throw new UserServiceException("Error logging in user", e);
        }
    }
    
    @Override
    public void logoutUser(HttpServletRequest request) throws UserServiceException {
        try {
            HttpSession session = request.getSession(false);
            if (session != null) {
                session.invalidate();
            }
        } catch (Exception e) {
            throw new UserServiceException("Error logging out user", e);
        }
    }
   
    @Override
    public boolean isUsernameExists(String username) throws UserServiceException {
        try {
            return userRepository.existsByUsername(username);
        } catch (Exception e) {
            throw new UserServiceException("Error checking username existence", e);
        }
    }

    @Override
    public boolean isEmailExists(String email) throws UserServiceException {
        try {
            return userRepository.existsByEmail(email);
        } catch (Exception e) {
            throw new UserServiceException("Error checking email existence", e);
        }
    }
    
    @Override
    public Users getUserById(Long id) throws UserServiceException {
        try {
            return userRepository.findById(id).orElse(null);
        } catch (Exception e) {
            throw new UserServiceException("Error getting user by ID", e);
        }
    }
}



