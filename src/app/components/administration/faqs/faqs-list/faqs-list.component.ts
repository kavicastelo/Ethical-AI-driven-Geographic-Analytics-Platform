import { Component } from '@angular/core';
import {faqDataStore} from "../../../../shared/store/faq-data-store";

@Component({
  selector: 'app-faqs-list',
  templateUrl: './faqs-list.component.html',
  styleUrls: ['./faqs-list.component.scss']
})
export class FaqsListComponent {

  faqs = faqDataStore

  delete(id: any) {

  }
}
