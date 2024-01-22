import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSettingsPrivacyComponent } from './admin-settings-privacy.component';

describe('AdminSettingsPrivacyComponent', () => {
  let component: AdminSettingsPrivacyComponent;
  let fixture: ComponentFixture<AdminSettingsPrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSettingsPrivacyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSettingsPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
