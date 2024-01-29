import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSettingsUserTermsComponent } from './admin-settings-user-terms.component';

describe('AdminSettingsUserTermsComponent', () => {
  let component: AdminSettingsUserTermsComponent;
  let fixture: ComponentFixture<AdminSettingsUserTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSettingsUserTermsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSettingsUserTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
