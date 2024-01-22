import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsNewComponent } from './faqs-new.component';

describe('FaqsNewComponent', () => {
  let component: FaqsNewComponent;
  let fixture: ComponentFixture<FaqsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqsNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
