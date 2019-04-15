import { Component, OnInit, Input } from '@angular/core';
import { BlogPostComponentInterface } from 'app/blog-post-component-interface';
import { BlogPostTypeService } from 'app/blog-post-type.service';

@Component({
  selector: 'app-blog-post-tweets',
  templateUrl: './blog-post-tweets.component.html',
  styleUrls: ['./blog-post-tweets.component.css']
})
@BlogPostTypeService.register("tweets")
export class BlogPostTweetsComponent implements OnInit, BlogPostComponentInterface {
  @Input() post: any;
  @Input() readMore: boolean;
  constructor() { }

  ngOnInit() { }

}
