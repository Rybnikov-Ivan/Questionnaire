import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { PanelUsersComponent } from './board-admin/panel-users/panel-users.component';
import { QuestionnaireDesignerComponent } from './board-admin/questionnaire-designer/questionnaire-designer.component';
import { PanelQuestionnaireComponent } from './board-admin/panel-questionnaire/panel-questionnaire.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent,
    children: [
      {
        path: 'users',
        component: PanelUsersComponent
      },
      {
        path: 'designer',
        component: QuestionnaireDesignerComponent
      },
      {
        path: 'questionnaires',
        component: PanelQuestionnaireComponent
      }
    ]},

  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
