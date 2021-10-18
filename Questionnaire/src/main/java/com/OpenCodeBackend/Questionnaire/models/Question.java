package com.OpenCodeBackend.Questionnaire.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@Table(name = "questions")
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 30)
    private String question;

    @Column(length = 20)
    private String typeAnswer;

    @OneToMany(fetch = FetchType.LAZY, cascade = {CascadeType.ALL})
    @JoinColumn(name = "answer_id")
    private List<Answer> answers = new ArrayList<>();

    public Question(){}

    public Question(Long id, String question, String typeAnswer) {
        this.id = id;
        this.question = question;
        this.typeAnswer = typeAnswer;
    }
}
