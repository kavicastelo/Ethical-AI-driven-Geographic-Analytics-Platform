import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsEditComponent } from './blogs-edit.component';

describe('BlogsEditComponent', () => {
  let component: BlogsEditComponent;
  let fixture: ComponentFixture<BlogsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
