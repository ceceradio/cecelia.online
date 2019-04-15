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
    this.blogData = blogData;
  }

}
