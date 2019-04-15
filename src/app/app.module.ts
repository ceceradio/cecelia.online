import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { TweetEmbedComponent } from './tweet-embed/tweet-embed.component';
import { BlogPostTweetsComponent } from './blog-post-tweets/blog-post-tweets.component';
import { BlogPostImagesComponent } from './blog-post-images/blog-post-images.component';
import { BlogPostEmbedComponent } from './blog-post-embed/blog-post-embed.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { OneTimeDirective } from './one-time.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    ProjectsComponent,
    BlogPostComponent,
    TweetEmbedComponent,
    BlogPostTweetsComponent,
    BlogPostImagesComponent,
    BlogPostEmbedComponent,
    BlogPageComponent,
    OneTimeDirective
  ],
  entryComponents: [
    BlogPostTweetsComponent,
    BlogPostImagesComponent,
    BlogPostEmbedComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    JsonpModule,
    RouterModule.forRoot([
      { path: '', component: HomeViewComponent, pathMatch: 'full'},
      { path: 'projects', component: ProjectsComponent, pathMatch: 'full'},
      { path: 'blog/:id', component: BlogPageComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
