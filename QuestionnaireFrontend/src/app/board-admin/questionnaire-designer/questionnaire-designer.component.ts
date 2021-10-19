import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Questionnaire } from 'src/app/models/questionnaire';
import { QuestionnaireService } from 'src/app/service/questionnaire.service';

@Component({
  selector: 'app-questionnaire-designer',
  templateUrl: './questionnaire-designer.component.html',
  styleUrls: ['./questionnaire-designer.component.css']
})
export class QuestionnaireDesignerComponent implements OnInit {
  questionForm!: FormGroup;
  submitted = false;

  constructor( private fb: FormBuilder, private questionnaireService: QuestionnaireService )
  {
    this.initForm()
  }

  ngOnInit(): void {
  }

  /**
   * Initialize the form
   */
  private initForm(){
    this.questionForm = this.fb.group({
      title: ["", [Validators.required, Validators.maxLength(30)]],
      description: ["", Validators.maxLength(200)],
      questions: this.fb.array([this.getQuestionItem()])
    })
  }

  /**
   * Create a form group for Question
   */
  private getQuestionItem(){
    return this.fb.group({
      question: ["", [Validators.required, Validators.maxLength(30)]],
      typeAnswer: ["", Validators.required],
      answers: this.fb.array([this.getAnswerItem()])
    })
  }

  /**
   * Create a form group for Answer
   */
  private getAnswerItem(){
    return this.fb.group({
      option: ["", Validators.required]
    });
  }

  /**
   * Getter for questions item as FormArray
   */
  get questions() {
    return (this.questionForm.get('questions') as FormArray);
  }

  get f() { return this.questionForm.controls; }

  /**
   * Get answers of a particular index as FormArray
   * @param questionIndex - index of the question
   * @returns
   */
  getAnswersFormArray(questionIndex: number){
    return this.questions.controls[questionIndex]?.get("answers") as FormArray;
  }

  /**
   * Get Form Controls of the answers array
   * @param answerIndex - index of the question
   * @returns
   */
  getAnswerControls(questionIndex: number){
    return this.getAnswersFormArray(questionIndex)?.controls;
  }

  /**
   * Add a answer item to existing form array
   */
  addQuestion() {
    this.questions.push(this.getQuestionItem());
  }

  /**
   * Remove a question item from the form array
   * @param index - index of the question item to be removed
   */
  removeQuestionAt(index: number){
    this.questions.removeAt(index);
  }

  /**
   * Add answer to the selected question
   * @param questionIndex - index of the question selected
   */
  addAnswer(questionIndex: number){
    this.getAnswersFormArray(questionIndex)?.push(this.getAnswerItem());
  }

  /**
   * Remove a answer from the question
   * @param questionIndex - index of the selected question
   * @param answerIndex - index of answer to remove
   */
  removeAnswerAt(questionIndex: number, answerIndex: number){
    this.getAnswersFormArray(questionIndex).removeAt(answerIndex);
  }

  onSubmit(): void {
    this.submitted = true;
    this.questionnaireService.saveQuestionnaire(this.questionForm).subscribe(
      data => {}
    );
  }
}
