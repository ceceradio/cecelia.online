import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostImagesComponent } from './blog-post-images.component';

describe('BlogPostImagesComponent', () => {
  let component: BlogPostImagesComponent;
  let fixture: ComponentFixture<BlogPostImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPostImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
