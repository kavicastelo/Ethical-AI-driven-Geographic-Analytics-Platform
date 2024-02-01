import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionAirComponent } from './prediction-air.component';

describe('PredictionAirComponent', () => {
  let component: PredictionAirComponent;
  let fixture: ComponentFixture<PredictionAirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictionAirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredictionAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
