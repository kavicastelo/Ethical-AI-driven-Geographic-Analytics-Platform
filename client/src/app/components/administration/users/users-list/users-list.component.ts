import {Component, OnInit} from '@angular/core';
import {usersDataStore} from "../../../../shared/store/users-data-store";
import {UserService} from "../../../../services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CredentialService} from "../../../../services/credential.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: any;
  isLoading: boolean = false;

  constructor(private userService: UserService, private matSnackbar: MatSnackBar, private credentialService: CredentialService) {
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.isLoading = true;
    this.userService.getAllUsers().subscribe((data: any) => {
      this.isLoading = false;
      if (data) {
        this.users = data.filter((user: any) => user.active);
      }
    })
  }

  deleteUser(id:any) {
    if (!confirm('Are you sure you want to delete this user?')) {
      return;
    }
    else{
      this.isLoading = true;
      this.userService.deleteUser(id).subscribe((data: any) => {
        this.isLoading = false;
        if (data) {
          this.openSnackbar('User deleted successfully', 'Close');
          this.loadUsers();
        }
      }, error => {
        this.isLoading = false;
        this.openSnackbar('Failed to delete user', 'Close');
      })
      this.credentialService.deleteCredentials(id).subscribe(res => {
        this.isLoading = false;
        this.openSnackbar('Credentials deleted successfully', 'Close');
      }, error => {
        this.isLoading = false;
        this.openSnackbar('Failed to delete user credentials', 'Close');
      });
    }

  }

  openSnackbar(msg: string, action: string) {
    this.matSnackbar.open(msg, action);
  }
}
