import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsAirComponent } from './stats-air.component';

describe('StatsAirComponent', () => {
  let component: StatsAirComponent;
  let fixture: ComponentFixture<StatsAirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsAirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
