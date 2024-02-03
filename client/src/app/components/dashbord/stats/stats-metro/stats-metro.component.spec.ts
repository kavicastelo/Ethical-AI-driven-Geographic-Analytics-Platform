import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsMetroComponent } from './stats-metro.component';

describe('StatsMetroComponent', () => {
  let component: StatsMetroComponent;
  let fixture: ComponentFixture<StatsMetroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsMetroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsMetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
