import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionGuideComponent } from './prediction-guide.component';

describe('PredictionGuideComponent', () => {
  let component: PredictionGuideComponent;
  let fixture: ComponentFixture<PredictionGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictionGuideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredictionGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
