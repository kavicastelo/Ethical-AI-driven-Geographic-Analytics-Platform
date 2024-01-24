import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSettingsPolicyComponent } from './admin-settings-policy.component';

describe('AdminSettingsPolicyComponent', () => {
  let component: AdminSettingsPolicyComponent;
  let fixture: ComponentFixture<AdminSettingsPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSettingsPolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSettingsPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
