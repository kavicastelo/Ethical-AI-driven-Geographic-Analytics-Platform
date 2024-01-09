import { Component } from '@angular/core';
import {faqDataStore} from "../../shared/store/faq-data-store";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  faqs = faqDataStore
}
