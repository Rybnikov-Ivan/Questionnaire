package com.OpenCodeBackend.Questionnaire.controllers;

import com.OpenCodeBackend.Questionnaire.models.Questionnaire;
import com.OpenCodeBackend.Questionnaire.repositories.QuestionnaireRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("user")
public class UserController {
    @Autowired
    QuestionnaireRepository questionnaireRepository;

    @GetMapping("/questionnaires")
    public ResponseEntity<List<Questionnaire>> getAllQuestionnaires(){
        List<Questionnaire> questionnaires = questionnaireRepository.findAll();
        return new ResponseEntity<>(questionnaires, HttpStatus.OK);
    }
}
