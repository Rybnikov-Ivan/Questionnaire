import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-questionnaire-designer',
  templateUrl: './questionnaire-designer.component.html',
  styleUrls: ['./questionnaire-designer.component.css']
})
export class QuestionnaireDesignerComponent implements OnInit {

  questionForm!: FormGroup;

  oneSelectedAnswer: boolean = false;
  severalSelectedAnswers: boolean = false;

  constructor( private fb: FormBuilder ) {
    this._createForm()
   }

  private _createForm(){
    this.questionForm = this.fb.group({
      questions: this.fb.array([]),
      answers: this.fb.array([])
    })
  }

  ngOnInit(): void {
  }

  onChange(event: any){
    if(event.target.value == "1"){
      this.oneSelectedAnswer = true;
      this.severalSelectedAnswers = false;
    }
    else if(event.target.value == "2") {
      this.severalSelectedAnswers = true;
      this.oneSelectedAnswer = false;
    } else {
      this.oneSelectedAnswer = false;
      this.severalSelectedAnswers = false;
    }
  }

  get questions() {
    return (this.questionForm.get('questions') as FormArray);
  }

  addQuestion() {
    this.questions.push(this.fb.control(''))
  }

  removeQuestionAt(index: number){
    this.questions.removeAt(index);
  }

  get answers(){
    return (this.questionForm.get('answers') as FormArray);
  }

  addAnswer() {
    this.answers.push(this.fb.control(''));
  }

  removeAnswerAt(index: number){
    this.answers.removeAt(index);
  }
}
