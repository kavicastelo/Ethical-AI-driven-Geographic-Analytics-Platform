import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAdminsComponent } from './users-admins.component';

describe('UsersAdminsComponent', () => {
  let component: UsersAdminsComponent;
  let fixture: ComponentFixture<UsersAdminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersAdminsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
