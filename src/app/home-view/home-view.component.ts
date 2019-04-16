import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import blogData from '../../assets/data/blog.json';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {
  constructor(private chRef: ChangeDetectorRef) {}
  blogData: any;

  ngOnInit() {
    this.blogData = this.splitBlogData();
  }
  splitBlogData() {
    let data = blogData.map((value, i) => Object.assign({}, value, {index: i}));
    let even = data.filter((value, i) => i % 2 == 0);
    let odd = data.filter((value, i) => i % 2 == 1);
    return even.concat(odd);
  }
}
