import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  nightMode = false;
  ngOnInit(): void {
    this.nightMode = !!localStorage.getItem('nightMode');
    this.setupTheme();
  }
  toggleNightMode() {
    this.nightMode = !this.nightMode;
    localStorage.setItem('nightMode', this.nightMode ? "true" : "");
    this.setupTheme();
  }
  setupTheme() {
    if (this.nightMode) {
      document.documentElement.classList.remove('theme--default');
      document.documentElement.classList.add('theme--dark');
    }
    else {
      document.documentElement.classList.remove('theme--dark');
      document.documentElement.classList.add('theme--default');
    }
  }
}
