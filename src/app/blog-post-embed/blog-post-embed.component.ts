import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BlogPostTypeService } from 'app/blog-post-type.service';
import { BlogPostComponentInterface } from 'app/blog-post-component-interface';

@Component({
  selector: 'app-blog-post-embed',
  templateUrl: './blog-post-embed.component.html',
  styleUrls: ['./blog-post-embed.component.scss']
})
@BlogPostTypeService.register("soundcloud-embed")
export class BlogPostEmbedComponent implements OnInit, BlogPostComponentInterface {
  @Input() post: any;
  @Input() readMore: boolean;
  url: any;
  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.url = this.getUrl();
  }
  getUrl() {
    let encodedUrl = encodeURIComponent(this.post.url);
    let resourceUrl = `https://w.soundcloud.com/player/?url=${encodedUrl}&color=%2300b2b8&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(resourceUrl);
  }
}
