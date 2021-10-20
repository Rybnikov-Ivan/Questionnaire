package com.OpenCodeBackend.Questionnaire.controllers;

import com.OpenCodeBackend.Questionnaire.models.*;
import com.OpenCodeBackend.Questionnaire.payload.request.QuestionnaireRequest;
import com.OpenCodeBackend.Questionnaire.repositories.QuestionnaireRepository;
import com.OpenCodeBackend.Questionnaire.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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

    @GetMapping("/questionnaires")
    public ResponseEntity<List<Questionnaire>> getAllQuestionnaires(){
        List<Questionnaire> questionnaires = questionnaireRepository.findAll();
        return new ResponseEntity<>(questionnaires, HttpStatus.OK);
    }

    @PostMapping("/designer")
    public ResponseEntity<?> createQuestionnaire(@Valid @RequestBody QuestionnaireRequest questionnaireRequest){

        List<Question> strTypes = questionnaireRequest.getQuestions();
        for (int i = 0; i<strTypes.size(); i++){
            if ("1".equals(strTypes.get(i).getTypeAnswer())){
               strTypes.get(i).setTypeAnswer(EAnswer.ONE_SELECTED.toString());
            } else {
                strTypes.get(i).setTypeAnswer(EAnswer.SEVERAL_SELECTED.toString());
            }
        }
        Questionnaire questionnaire = new Questionnaire(questionnaireRequest.getTitle(),
                questionnaireRequest.getDescription(),
                strTypes);

        questionnaireRepository.save(questionnaire);
        return new ResponseEntity<>(questionnaire, HttpStatus.CREATED);
    }
}
