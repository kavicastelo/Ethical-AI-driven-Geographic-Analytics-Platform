import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetrologicalDataComponent } from './metrological-data.component';

describe('MetrologicalDataComponent', () => {
  let component: MetrologicalDataComponent;
  let fixture: ComponentFixture<MetrologicalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetrologicalDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetrologicalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
