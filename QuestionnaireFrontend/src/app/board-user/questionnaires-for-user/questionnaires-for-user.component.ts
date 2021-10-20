import { Component, OnInit } from '@angular/core';
import { Questionnaire } from 'src/app/models/questionnaire';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-questionnaires-for-user',
  templateUrl: './questionnaires-for-user.component.html',
  styleUrls: ['./questionnaires-for-user.component.css']
})
export class QuestionnairesForUserComponent implements OnInit {
  public questionnaires!: Questionnaire[];
  public selectedQuestionnaire!: Questionnaire[];

  startQuestionnaire: boolean = false;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.updateTable();
  }

  updateTable(): void {
    this.userService.getAllQuestionnaire().subscribe(
      (response: Questionnaire[]) => {
        this.questionnaires = response;
      }
    )
  }

  start(e: any){
    this.selectedQuestionnaire = e;
  }
}
