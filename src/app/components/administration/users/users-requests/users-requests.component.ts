import {Component, OnInit} from '@angular/core';
import {usersDataStore} from "../../../../shared/store/users-data-store";

@Component({
  selector: 'app-users-requests',
  templateUrl: './users-requests.component.html',
  styleUrls: ['./users-requests.component.scss']
})
export class UsersRequestsComponent implements OnInit {

  users:any = usersDataStore;

  ngOnInit(): void {
    this.users = this.users.filter((user:any) => user.active === false)
  }

  deleteUser(id:any) {

  }

  approveUser(id:any) {

  }
}
