import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersNewAdminComponent } from './users-new-admin.component';

describe('UsersNewAdminComponent', () => {
  let component: UsersNewAdminComponent;
  let fixture: ComponentFixture<UsersNewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersNewAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersNewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
