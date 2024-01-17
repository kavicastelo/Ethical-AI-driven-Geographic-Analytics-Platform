import {Component, OnInit} from '@angular/core';
import {adminsDataStore} from "../../../../shared/store/admin-data-store";
import {AdminService} from "../../../../services/admin.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-users-admins',
  templateUrl: './users-admins.component.html',
  styleUrls: ['./users-admins.component.scss']
})
export class UsersAdminsComponent implements OnInit {
  admins: any;

  constructor(private adminService: AdminService, private matSnackbar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.loadAdmins()
  }

  loadAdmins() {
    this.adminService.getAllAdmins().subscribe(
      (response) => {
        this.admins = response;
      }
    )
  }

  openSnackbar(msg: string, action: string) {
    this.matSnackbar.open(msg, action);
  }
}
