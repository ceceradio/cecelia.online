import { TestBed } from '@angular/core/testing';

import { BlogPostTypeService } from './blog-post-type.service';

describe('BlogPostTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogPostTypeService = TestBed.get(BlogPostTypeService);
    expect(service).toBeTruthy();
  });
});
