import { Injectable } from '@angular/core';
import { BlogPostComponentInterface } from './blog-post-component-interface';
type Constructor<T> = {
  new(...args: any[]): T;
  readonly prototype: T;
}
@Injectable({
  providedIn: 'root'
})
export class BlogPostTypeService {
  static implementations: object = {};
  static register(typeName: string) {
    return function<T extends Constructor<BlogPostComponentInterface>>(ctor: T) {
      if (BlogPostTypeService.implementations.hasOwnProperty(typeName)) {
        console.error("This post type has already been registered. Did you forget to change the argument for @Register()?");
      }
      else {
        BlogPostTypeService.implementations[typeName] = ctor;
      }
      return ctor;
    }
  }
  constructor() { }
  getPostTypeFromString(typeName: string) {
    if (!BlogPostTypeService.implementations.hasOwnProperty(typeName)) {
      throw new Error("This post type does not exist. Did you forget to @Register() it?");
    }
    return BlogPostTypeService.implementations[typeName];
  }
}
