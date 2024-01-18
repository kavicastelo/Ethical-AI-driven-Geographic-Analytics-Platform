import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {faqDataStore} from "../../../../shared/store/faq-data-store";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FaqService} from "../../../../services/faq.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-faqs-edit',
  templateUrl: './faqs-edit.component.html',
  styleUrls: ['./faqs-edit.component.scss']
})
export class FaqsEditComponent implements OnInit {
  faqs:any;
  selectedFAQ: any

  faqForm = new FormGroup({
    question: new FormControl(null,[
      Validators.required
    ]),
    answer: new FormControl(null,[
      Validators.required
    ])
  })

  private destroy$ = new Subject<void>();

  constructor(private faqService: FaqService, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loadFaqs();

    this.faqForm.get('question')?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((selectedQuestion: any) => {
        this.loadCurrentFAQ(selectedQuestion);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadFaqs() {
    this.faqService.getAllFAQs().subscribe((data: any) => {
      if (data) {
        this.faqs = data;
      }
    }, error => {
      this.openSnackBar('Error loading FAQs', 'Close');
    })
  }

  loadCurrentFAQ(faq: any) {
    this.selectedFAQ = this.faqs.find((f: any) => f.question === faq);
    if (this.selectedFAQ) {
      this.faqForm.get('answer')?.setValue(this.selectedFAQ.answer);
    }
  }

  updateFAQ() {
    if (this.faqForm.valid) {
      this.faqService.updateFAQ({
        id: this.selectedFAQ.id,
        question: this.faqForm.value.question,
        answer: this.faqForm.value.answer
      }).subscribe((data: any) => {
        if (data) {
          this.loadFaqs();
          this.openSnackBar('FAQ updated successfully', 'Close');
        }
      }, error => {
        this.openSnackBar('Error updating FAQ', 'Close');
      })
    }
  }

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action,{duration: 3000});
  }
}
