import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {faqDataStore} from "../../../../shared/store/faq-data-store";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-faqs-edit',
  templateUrl: './faqs-edit.component.html',
  styleUrls: ['./faqs-edit.component.scss']
})
export class FaqsEditComponent implements OnInit {
  faqs = faqDataStore
  selectedFAQ: any

  faqForm = new FormGroup({
    question: new FormControl(null,[
      Validators.required
    ]),
    answer: new FormControl(null,[
      Validators.required
    ])
  })

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.cdr.detectChanges();
  }

  loadCurrentFAQ(faq: any) {
    this.faqs.forEach((f: any) => {
      if(faq === f.question) {
        this.selectedFAQ = f;
        this.faqForm.get('answer')?.setValue(f.answer);
      }
    })
  }

  updateFAQ() {
    console.log("updateFAQ" + this.selectedFAQ.id);
  }
}
