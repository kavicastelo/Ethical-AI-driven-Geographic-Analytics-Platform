import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastNewComponent } from './forecast-new.component';

describe('ForecastNewComponent', () => {
  let component: ForecastNewComponent;
  let fixture: ComponentFixture<ForecastNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecastNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
