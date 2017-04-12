import { Component, OnInit } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { FeedService } from '../feed.service';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers:[FeedService]
})
export class WelcomeComponent implements OnInit {

  private feedUrl: string = 'https%3A%2F%2Fwww.newsdeeply.com%2Fsyria%2Frss';
  private feeds: any;
  title = 'app works!';
  tweets;

  constructor(private http: Http, private feedService: FeedService){}
  makecall() {
    var headers = new Headers();

    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    this.http.post('http://localhost:3000/authorize', {headers: headers}).subscribe((res) => {
      // console.log(res);
    })
  }

  searchcall(){
    var headers = new Headers();
    var searchterm = 'query=syria';

    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    this.http.post('http://localhost:3000/search', searchterm, {headers: headers}).subscribe((res) => {
      console.log(res.json());
      this.tweets = res.json().data.statuses;
    });
  }

refreshFeed() {
    this.feedService.getFeedContent(this.feedUrl)
        .subscribe(feed => { console.log(feed['items']);this.feeds = feed['items']},
        error => console.log(error))
  }


  ngOnInit() {
    this.makecall();

    this.searchcall();

     this.refreshFeed();
  }


}
