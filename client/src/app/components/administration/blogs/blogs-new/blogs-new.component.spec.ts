import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsNewComponent } from './blogs-new.component';

describe('BlogsNewComponent', () => {
  let component: BlogsNewComponent;
  let fixture: ComponentFixture<BlogsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogsNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
