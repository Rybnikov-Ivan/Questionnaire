import { Component, OnInit } from '@angular/core';
import { Questionnaire } from 'src/app/models/questionnaire';
import { QuestionnaireService } from 'src/app/service/questionnaire.service';

@Component({
  selector: 'app-panel-questionnaire',
  templateUrl: './panel-questionnaire.component.html',
  styleUrls: ['./panel-questionnaire.component.css']
})
export class PanelQuestionnaireComponent implements OnInit {
  public questionnaires!: Questionnaire[];

  constructor(private questionnaireService: QuestionnaireService) { }

  ngOnInit(): void {
    this.updateTable();
  }

  updateTable(): void {
    this.questionnaireService.getAllQuestionnaire().subscribe(
      (response: Questionnaire[]) => {
        this.questionnaires = response;
      }
    )
  }

}
