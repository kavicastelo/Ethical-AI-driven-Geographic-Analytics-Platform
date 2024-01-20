import {Component, OnInit} from '@angular/core';
import {faqDataStore} from "../../shared/store/faq-data-store";
import {FaqService} from "../../services/faq.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  faqs:any;

  constructor(private faqService: FaqService, private matSnackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.loadFaqs()
  }

  loadFaqs() {
    this.faqService.getAllFAQs().subscribe(res => {
      this.faqs = res
    }, error => {
      this.openSnackBar('Error loading FAQs', 'Close');
    });
  }

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action, {duration: 3000});
  }
}
