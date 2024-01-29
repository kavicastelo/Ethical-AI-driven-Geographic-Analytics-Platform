import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private sectionSource = new Subject<string>();
  section$ = this.sectionSource.asObservable();

  constructor() { }

  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.sectionSource.next(section);
    }
  }
}
