import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-questionnaire-designer',
  templateUrl: './questionnaire-designer.component.html',
  styleUrls: ['./questionnaire-designer.component.css']
})
export class QuestionnaireDesignerComponent implements OnInit {

  questionListControl!: FormGroup;
  answerListControl!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.questionListControl = new FormGroup({
      questions: new FormArray([])
    })

    this.answerListControl = new FormGroup({
      answers: new FormArray([])
    })
  }

  getQuestionControls() {
    return (this.questionListControl.get('questions') as FormArray).controls;
  }

  addQuestion() {
    (this.questionListControl.controls['questions'] as FormArray).push(new FormControl(''))
  }

  removeQuestion(index: number){
    (this.questionListControl.controls['questions'] as FormArray).removeAt(index);
  }

  getAnswerControls(){
    return (this.answerListControl.get('answers') as FormArray).controls;
  }

  addAnswer() {
    (this.answerListControl.controls['answers'] as FormArray).push(new FormControl(''));
  }

  removeAnswer(index: number){
    (this.answerListControl.controls['answers'] as FormArray).removeAt(index);
  }
}
