import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphsMetroComponent } from './graphs-metro.component';

describe('GraphsMetroComponent', () => {
  let component: GraphsMetroComponent;
  let fixture: ComponentFixture<GraphsMetroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphsMetroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphsMetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
