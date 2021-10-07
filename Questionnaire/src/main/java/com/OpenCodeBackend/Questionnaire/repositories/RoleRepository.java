package com.OpenCodeBackend.Questionnaire.repositories;

import com.OpenCodeBackend.Questionnaire.models.ERole;
import com.OpenCodeBackend.Questionnaire.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
