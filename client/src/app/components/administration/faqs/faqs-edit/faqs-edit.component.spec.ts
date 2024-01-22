import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsEditComponent } from './faqs-edit.component';

describe('FaqsEditComponent', () => {
  let component: FaqsEditComponent;
  let fixture: ComponentFixture<FaqsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
