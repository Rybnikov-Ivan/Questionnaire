package com.OpenCodeBackend.Questionnaire.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

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

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private EAnswer type;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "answer_id")
    private Answer answer;

    public Question(){}

    public Question(Long id, String question, EAnswer type) {
        this.id = id;
        this.question = question;
        this.type = type;
    }
}
