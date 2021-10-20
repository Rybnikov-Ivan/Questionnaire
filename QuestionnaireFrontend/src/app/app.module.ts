import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { authInterceptorProviders } from './helpers/auth.interceptor';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { PanelUsersComponent } from './board-admin/panel-users/panel-users.component';
import { QuestionnaireDesignerComponent } from './board-admin/questionnaire-designer/questionnaire-designer.component';
import { PanelQuestionnaireComponent } from './board-admin/panel-questionnaire/panel-questionnaire.component';
import { QuestionnairesForUserComponent } from './board-user/questionnaires-for-user/questionnaires-for-user.component';
import { QuestionComponent } from './board-user/questionnaires-for-user/components/question/question.component';
import { TitleComponent } from './board-user/questionnaires-for-user/components/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardUserComponent,
    PanelUsersComponent,
    QuestionnaireDesignerComponent,
    PanelQuestionnaireComponent,
    QuestionnairesForUserComponent,
    QuestionComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
