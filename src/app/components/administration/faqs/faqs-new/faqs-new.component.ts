import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-faqs-new',
  templateUrl: './faqs-new.component.html',
  styleUrls: ['./faqs-new.component.scss']
})
export class FaqsNewComponent {

  faqForm = new FormGroup({
    question: new FormControl(null,[
      Validators.required
    ]),
    answer: new FormControl(null,[
      Validators.required
    ])
  })

  submit() {

  }
}
