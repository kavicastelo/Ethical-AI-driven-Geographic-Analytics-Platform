import {Component, OnInit} from '@angular/core';
import {usersDataStore} from "../../../../shared/store/users-data-store";
import {UserService} from "../../../../services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CredentialService} from "../../../../services/credential.service";

@Component({
  selector: 'app-users-requests',
  templateUrl: './users-requests.component.html',
  styleUrls: ['./users-requests.component.scss']
})
export class UsersRequestsComponent implements OnInit {

  users:any;
  isLoading: boolean = false;

  constructor(private userService: UserService, private matSnackbar: MatSnackBar, private credentialService: CredentialService) {
  }

  ngOnInit(): void {
    this.loadUsers()
  }

  loadUsers() {
    this.isLoading = true;
    this.userService.getAllUsers().subscribe((data: any) => {
      this.isLoading = false;
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
      this.isLoading = true;
      this.userService.deleteUser(id).subscribe((data: any) => {
        this.isLoading = false;
        if (data) {
          this.openSnackbar('User deleted successfully', 'Close');
          this.loadUsers();
        }
      }, error => {
        this.openSnackbar('Failed to delete user', 'Close');
      })
      this.credentialService.deleteCredentials(id).subscribe((data: any) => {
        this.isLoading = false;
        this.openSnackbar('User deleted successfully', 'Close');
      }, error => {
        this.isLoading = false;
        this.openSnackbar('Failed to delete user', 'Close');
      })
    }
  }

  approveUser(id:any) {
    let password = Math.random().toString(36).slice(-8);
    this.credentialService.setCredentials({
      id: id,
      email: this.users.find((user: any) => user.id === id).email,
      password: password
    }).subscribe((data: any) => {
      this.openSnackbar('User approved successfully', 'Close');
      this.loadUsers();
    })
    this.isLoading = true;
    this.userService.approveUser(id).subscribe(res => {
      this.isLoading = false;
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
