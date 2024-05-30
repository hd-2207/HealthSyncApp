package com.projecttemptest.users.repository;

import com.projecttemptest.users.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;



public interface UsersRepository extends JpaRepository<Users, Long> {
    Users findByUsername(String username);
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);
}
