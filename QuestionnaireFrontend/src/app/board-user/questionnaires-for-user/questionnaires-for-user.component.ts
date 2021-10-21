import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Answer, Question, Questionnaire } from 'src/app/models/questionnaire';
import { UserService } from 'src/app/service/user.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-questionnaires-for-user',
  templateUrl: './questionnaires-for-user.component.html',
  styleUrls: ['./questionnaires-for-user.component.css']
})
export class QuestionnairesForUserComponent implements OnInit {
  @ViewChild('content') content: any;
  @Output() result : EventEmitter<string> = new EventEmitter();
  public questionnaires!: Questionnaire[];
  public selectedQuestionnaire!: Questionnaire;

  pager = {
    index: 0,
    size: 1,
    count: 0
  };

  constructor(private userService: UserService, private modalService : NgbModal, config: NgbModalConfig) {
    config.centered = true;
    config.backdrop = 'static';
   }

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
    this.pager.count = this.selectedQuestionnaire.questions.length;
    this.modalService.open(this.content);
  }

  get filteredQuestions() {
    return (this.selectedQuestionnaire.questions) ?
      this.selectedQuestionnaire.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  onSelect(question: Question, option: Answer) {

  }

  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
    }
  }

  save(){
    let answers = [];

  }
}
