import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pm25Component } from './pm25.component';

describe('Pm25Component', () => {
  let component: Pm25Component;
  let fixture: ComponentFixture<Pm25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pm25Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pm25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
