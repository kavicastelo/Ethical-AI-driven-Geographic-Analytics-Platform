import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-admin-settings-privacy',
  templateUrl: './admin-settings-privacy.component.html',
  styleUrls: ['./admin-settings-privacy.component.scss']
})
export class AdminSettingsPrivacyComponent {

  passwordForm = new FormGroup({
    currentPassword: new FormControl(null,[
      Validators.required
    ]),
    newPassword: new FormControl(null,[
      Validators.required
    ])
  })

  onSubmit() {

  }

  deleteAccount() {

  }
}
