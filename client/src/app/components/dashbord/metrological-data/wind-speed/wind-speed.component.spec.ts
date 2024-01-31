import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindSpeedComponent } from './wind-speed.component';

describe('WindSpeedComponent', () => {
  let component: WindSpeedComponent;
  let fixture: ComponentFixture<WindSpeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindSpeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
