import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionMetroComponent } from './prediction-metro.component';

describe('PredictionMetroComponent', () => {
  let component: PredictionMetroComponent;
  let fixture: ComponentFixture<PredictionMetroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictionMetroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredictionMetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
