import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OzoneComponent } from './ozone.component';

describe('OzoneComponent', () => {
  let component: OzoneComponent;
  let fixture: ComponentFixture<OzoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OzoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
