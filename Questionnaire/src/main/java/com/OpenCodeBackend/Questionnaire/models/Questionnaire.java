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
@Table(name = "questionnaires")
public class Questionnaire {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 30)
    private String title;

    @NotBlank
    @Size(max = 200)
    private String description;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "questionnaire_question",
                joinColumns = @JoinColumn(name = "questionnaire_id"),
                inverseJoinColumns = @JoinColumn(name = "question_id"))
    private List<Question> questions = new ArrayList<>();

    public Questionnaire(){}

    public Questionnaire(Long id, String title, String description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }
}
