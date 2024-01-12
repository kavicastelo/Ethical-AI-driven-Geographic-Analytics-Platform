import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-users-new-admin',
  templateUrl: './users-new-admin.component.html',
  styleUrls: ['./users-new-admin.component.scss']
})
export class UsersNewAdminComponent {

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

  submit() {

  }
}
