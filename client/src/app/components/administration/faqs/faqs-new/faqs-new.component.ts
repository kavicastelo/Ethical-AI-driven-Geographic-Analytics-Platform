import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FaqService} from "../../../../services/faq.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-faqs-new',
  templateUrl: './faqs-new.component.html',
  styleUrls: ['./faqs-new.component.scss']
})
export class FaqsNewComponent implements OnInit {

  faqForm = new FormGroup({
    question: new FormControl(null,[
      Validators.required
    ]),
    answer: new FormControl(null,[
      Validators.required
    ])
  })

  isLoading:boolean = false;

  constructor(private faqsService: FaqService, private matSnackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  submit() {
    this.isLoading = true;
    if (this.faqForm.valid) {
      this.faqsService.createFAQ({
        id: null,
        question: this.faqForm.value.question,
        answer: this.faqForm.value.answer
    }).subscribe(data => {
        this.isLoading = false;
        this.openSnackBar('FAQ created', 'Close');
        this.faqForm.reset();
      }, error => {
        this.isLoading = false;
        this.openSnackBar('Error creating FAQ', 'Close');
      });
    }
    else {
      this.isLoading = false;
      this.openSnackBar('Please fill all required fields', 'Close');
    }
  }

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action);
  }
}
