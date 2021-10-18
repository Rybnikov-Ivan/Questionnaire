package com.OpenCodeBackend.Questionnaire.payload.request;

import com.OpenCodeBackend.Questionnaire.models.Question;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

public class QuestionnaireRequest {
    @NotBlank
    @Size(min = 3, max = 20)
    private String title;

    @NotBlank
    @Size(min = 3, max = 250)
    private String description;

    private List<Question> questions = new ArrayList<>();

    private QuestionnaireRequest() {}

    public QuestionnaireRequest(String title, String description) {
        this.title = title;
        this.description = description;
    }

    public List<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
