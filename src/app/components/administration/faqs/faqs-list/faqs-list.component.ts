import {Component, OnInit} from '@angular/core';
import {faqDataStore} from "../../../../shared/store/faq-data-store";
import {FaqService} from "../../../../services/faq.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-faqs-list',
  templateUrl: './faqs-list.component.html',
  styleUrls: ['./faqs-list.component.scss']
})
export class FaqsListComponent implements OnInit {

  faqs:any;

  constructor(private faqService: FaqService, private matSnackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.loadFaqs();
  }

  loadFaqs() {
    this.faqService.getAllFAQs().subscribe((data: any) => {
      if (data) {
        this.faqs = data;
      }
    })
  }

  delete(id: any) {

  }
}
