import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersRequestsComponent } from './users-requests.component';

describe('UsersRequestsComponent', () => {
  let component: UsersRequestsComponent;
  let fixture: ComponentFixture<UsersRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
