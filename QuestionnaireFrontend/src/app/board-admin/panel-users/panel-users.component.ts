import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-panel-users',
  templateUrl: './panel-users.component.html',
  styleUrls: ['./panel-users.component.css']
})
export class PanelUsersComponent implements OnInit {
  public users: User[] | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.updateGrid();
  }

  public updateGrid(): void {
    this.userService.getAllUsers().subscribe(
      (response: User[]) => {
        this.users = response;
      }
    );
  }
}
