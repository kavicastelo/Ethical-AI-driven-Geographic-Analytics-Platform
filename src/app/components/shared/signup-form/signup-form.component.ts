import { Component } from '@angular/core';
import {countries} from "../../../shared/store/country-data-store";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {
  countries:any = countries;

  signupForm = new FormGroup({
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
    country: new FormControl(null,[
      Validators.required
    ]),
    remarks: new FormControl(null)
  })

  submit() {

  }
}
