import {Component, OnInit} from '@angular/core';
import {usersDataStore} from "../../../../shared/store/users-data-store";
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: any;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAllUsers().subscribe((data: any) => {
      if (data) {
        this.users = data;
      }
    })
  }

  deleteUser(id:any) {

  }
}
