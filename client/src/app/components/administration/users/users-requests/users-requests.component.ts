import {Component, OnInit} from '@angular/core';
import {usersDataStore} from "../../../../shared/store/users-data-store";
import {UserService} from "../../../../services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-users-requests',
  templateUrl: './users-requests.component.html',
  styleUrls: ['./users-requests.component.scss']
})
export class UsersRequestsComponent implements OnInit {

  users:any;

  constructor(private userService: UserService, private matSnackbar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.loadUsers()
  }

  loadUsers() {
    this.userService.getAllUsers().subscribe((data: any) => {
      if (data) {
        this.users = data.filter((user: any) => user.active === false);
      }
    })
  }

  deleteUser(id:any) {
    if (!confirm('Are you sure you want to delete this user?')) {
      return;
    }
    else{
      this.userService.deleteUser(id).subscribe((data: any) => {
        if (data) {
          this.openSnackbar('User deleted successfully', 'Close');
          this.loadUsers();
        }
      }, error => {
        this.openSnackbar('Failed to delete user', 'Close');
      })
    }
  }

  approveUser(id:any) {
    this.userService.approveUser(id).subscribe(res => {
      this.openSnackbar('User approved successfully', 'Close');
      this.loadUsers();
    }, error => {
      this.openSnackbar('Failed to approve user', 'Close');
    })
  }

  openSnackbar(msg: string, action: string) {
    this.matSnackbar.open(msg, action);
  }
}
