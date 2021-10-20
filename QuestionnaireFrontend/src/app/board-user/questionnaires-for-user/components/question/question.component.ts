import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Questionnaire } from 'src/app/models/questionnaire';
import { UserAnswer } from 'src/app/models/user-answer';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  public questionnaires!: Questionnaire[];
  @Input() questionnaire = {} as Questionnaire;
  @Input() number = 0;
  @Output() setAnswer = new EventEmitter<UserAnswer>();

  selectedAnswer = '';
  constructor() { }

  ngOnInit(): void {
  }

  pickAnswer(id: number, answer: string, value: string) {
    this.selectedAnswer = `[${answer}] ${value}`;
  }
}
