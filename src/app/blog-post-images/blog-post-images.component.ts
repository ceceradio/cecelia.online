import { Component, OnInit, Input, AfterViewInit, ElementRef } from '@angular/core';
import { BlogPostTypeService } from 'app/blog-post-type.service';
import { BlogPostComponentInterface } from 'app/blog-post-component-interface';
import * as SimpleLightbox from 'simple-lightbox';

@Component({
  selector: 'app-blog-post-images',
  templateUrl: './blog-post-images.component.html',
  styleUrls: ['./blog-post-images.component.scss']
})
@BlogPostTypeService.register("images")
export class BlogPostImagesComponent implements AfterViewInit, BlogPostComponentInterface {
  @Input() post: any;
  @Input() readMore: boolean;
  sl: any;

  constructor(private elRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.sl = new SimpleLightbox({
      elements: this.elRef.nativeElement.querySelectorAll('a')
    });
  }

}
