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
  isLoading: boolean = true;

  constructor(private faqService: FaqService, private matSnackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.loadFaqs();
  }

  loadFaqs() {
    this.faqService.getAllFAQs().subscribe((data: any) => {
      this.isLoading = false;
      if (data) {
        this.faqs = data;
      }
    })
  }

  delete(id: any) {
    if (confirm('Are you sure you want to delete this FAQ?')) {
      this.isLoading = true;
      this.faqService.deleteFAQ(id).subscribe((data: any) => {
        this.loadFaqs();
        this.isLoading = false;
        this.openSnackBar('FAQ deleted', 'Close');
      }, error => {
        this.openSnackBar('Error deleting FAQ', 'Close');
      })
    }
  }

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action);
  }
}
