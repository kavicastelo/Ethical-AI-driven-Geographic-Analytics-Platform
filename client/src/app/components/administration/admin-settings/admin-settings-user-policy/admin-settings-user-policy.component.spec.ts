import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSettingsUserPolicyComponent } from './admin-settings-user-policy.component';

describe('AdminSettingsUserPolicyComponent', () => {
  let component: AdminSettingsUserPolicyComponent;
  let fixture: ComponentFixture<AdminSettingsUserPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSettingsUserPolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSettingsUserPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
