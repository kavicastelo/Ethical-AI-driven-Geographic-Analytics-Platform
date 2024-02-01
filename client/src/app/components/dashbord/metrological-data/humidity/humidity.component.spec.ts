import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumidityComponent } from './humidity.component';

describe('HumidityComponent', () => {
  let component: HumidityComponent;
  let fixture: ComponentFixture<HumidityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumidityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumidityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
