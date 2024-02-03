import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphsAirComponent } from './graphs-air.component';

describe('GraphsAirComponent', () => {
  let component: GraphsAirComponent;
  let fixture: ComponentFixture<GraphsAirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphsAirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphsAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
