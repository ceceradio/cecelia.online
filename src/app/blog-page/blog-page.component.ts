import { Component, OnInit, Input } from '@angular/core';
import blogData from '../../assets/data/blog.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }
  post: any;

  ngOnInit() {
    let slug = this.route.snapshot.paramMap.get("id")
    let filteredPost = blogData.filter((blog) => blog.slug == slug);
    if (filteredPost.length > 0) {
      this.post = filteredPost[0];
    }
    else {
      this.post = false;
    }
  }

}
