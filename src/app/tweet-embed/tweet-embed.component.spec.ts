import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetEmbedComponent } from './tweet-embed.component';

describe('TweetEmbedComponent', () => {
  let component: TweetEmbedComponent;
  let fixture: ComponentFixture<TweetEmbedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetEmbedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
