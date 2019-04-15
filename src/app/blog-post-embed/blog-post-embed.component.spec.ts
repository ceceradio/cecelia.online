import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostEmbedComponent } from './blog-post-embed.component';

describe('BlogPostEmbedComponent', () => {
  let component: BlogPostEmbedComponent;
  let fixture: ComponentFixture<BlogPostEmbedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPostEmbedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
