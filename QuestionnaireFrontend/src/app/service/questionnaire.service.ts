import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Questionnaire } from '../models/questionnaire';

const URL = 'http://localhost:8080/admin/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  constructor(private http: HttpClient) { }

  saveQuestionnaire(form: FormGroup): Observable<Questionnaire> {
    return this.http.post<Questionnaire>(URL+'designer',
    form.value,
    httpOptions);
  }
}
