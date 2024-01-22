import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../../../services/admin.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-users-new-admin',
  templateUrl: './users-new-admin.component.html',
  styleUrls: ['./users-new-admin.component.scss']
})
export class UsersNewAdminComponent implements OnInit {

  adminForm = new FormGroup({
    name: new FormControl(null,[
      Validators.required
    ]),
    email: new FormControl(null,[
      Validators.required,
      Validators.email
    ]),
    phone: new FormControl(null,[
      Validators.required
    ]),
    password: new FormControl(null,[
      Validators.required
    ])
  })

  constructor(private adminService: AdminService, private matSnackbar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  submit() {
    this.adminService.createAdmin({
      id: null,
      name: this.adminForm.value.name,
      email: this.adminForm.value.email,
      phone: this.adminForm.value.phone,
      password: this.adminForm.value.password
    }).subscribe(res => {
      this.openSnackbar('Admin created successfully', 'Close');
      this.adminForm.reset();
    })
  }

  openSnackbar(msg: string, action: string) {
    this.matSnackbar.open(msg, action);
  }
}
