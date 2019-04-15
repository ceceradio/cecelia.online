import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostTweetsComponent } from './blog-post-tweets.component';

describe('BlogPostTweetsComponent', () => {
  let component: BlogPostTweetsComponent;
  let fixture: ComponentFixture<BlogPostTweetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPostTweetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
