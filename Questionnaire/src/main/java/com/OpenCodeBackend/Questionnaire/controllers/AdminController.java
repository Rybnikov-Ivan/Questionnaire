package com.OpenCodeBackend.Questionnaire.controllers;

import com.OpenCodeBackend.Questionnaire.models.Questionnaire;
import com.OpenCodeBackend.Questionnaire.models.User;
import com.OpenCodeBackend.Questionnaire.repositories.QuestionnaireRepository;
import com.OpenCodeBackend.Questionnaire.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("admin")
public class AdminController {
    @Autowired
    UserRepository userRepository;

    @Autowired
    QuestionnaireRepository questionnaireRepository;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers(){
        List<User> users = userRepository.findAll();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @PostMapping("/designer")
    public ResponseEntity<Questionnaire> createQuestionnaire(@Valid @RequestBody Questionnaire questionnaire){
        questionnaireRepository.save(questionnaire);
        return new ResponseEntity<>(questionnaire, HttpStatus.CREATED);
    }
}
