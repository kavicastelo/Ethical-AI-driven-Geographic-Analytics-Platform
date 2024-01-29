import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pm10Component } from './pm10.component';

describe('Pm10Component', () => {
  let component: Pm10Component;
  let fixture: ComponentFixture<Pm10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pm10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pm10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
