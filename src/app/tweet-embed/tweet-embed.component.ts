import { Component, AfterViewInit, ChangeDetectorRef, ViewChild, ElementRef, Input } from '@angular/core';
declare var twttr: any;
@Component({
  selector: 'app-tweet-embed',
  templateUrl: './tweet-embed.component.html',
  styleUrls: ['./tweet-embed.component.css']
})
export class TweetEmbedComponent implements AfterViewInit {
  @ViewChild('tweetcontainer') tweetContainer: ElementRef;
  tweetLoaded: boolean = false;
  @Input() tweet: any;
  constructor(private chRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    if (twttr) {
      twttr.widgets.createTweet(
          this.tweet,
          this.tweetContainer.nativeElement,
          {}
        ).then(() => {
          this.tweetLoaded = true;
          this.chRef.detectChanges();
        });
    }
  }

}
