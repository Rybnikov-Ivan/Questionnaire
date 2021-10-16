package com.OpenCodeBackend.Questionnaire.repositories;

import com.OpenCodeBackend.Questionnaire.models.Questionnaire;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionnaireRepository extends JpaRepository<Questionnaire, Long> {
}
