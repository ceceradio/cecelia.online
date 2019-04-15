import { Component, OnInit, Input, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { BlogPostComponentInterface } from 'app/blog-post-component-interface';
import { BlogPostTypeService } from 'app/blog-post-type.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  @Input() post: any;
  @Input() readMore: boolean;
  liked: boolean = false;
  @ViewChild("container", { read: ViewContainerRef }) blogPostContainer: ViewContainerRef;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private blogPostTypeFactory: BlogPostTypeService
  ) { }

  loadComponent() {
    let component = this.blogPostTypeFactory.getPostTypeFromString(this.post.type);

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

    this.blogPostContainer.clear();

    let componentRef = this.blogPostContainer.createComponent(componentFactory);
    (<BlogPostComponentInterface>componentRef.instance).post = this.post;
    (<BlogPostComponentInterface>componentRef.instance).readMore = this.readMore;
  }
  postLikeToggle() {
    localStorage.setItem(`${this.post.slug}-liked`, this.liked ? "true" : "");
  }
  ngOnInit() {
    this.loadComponent();
    this.liked = !!localStorage.getItem(`${this.post.slug}-liked`);
  }
}
