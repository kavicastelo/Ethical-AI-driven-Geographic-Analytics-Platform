import { Component } from '@angular/core';
import {usersDataStore} from "../../../../shared/store/users-data-store";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  users: any = usersDataStore;

  deleteUser(id:any) {

  }
}
