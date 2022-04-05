import { Component,  OnInit } from '@angular/core';
import { Post } from './Post.interface';
import { DataserviceService } from './dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching: boolean = false;

  constructor(private dataService:DataserviceService) {}

  ngOnInit() {
    this.onFetchPosts();
  }

  onCreatePost(postData: Post) {
    this.dataService.createPost(postData);
    this.onFetchPosts();
  }

  onFetchPosts() {
    this.isFetching = true;
    this.dataService.fetchPosts().subscribe(data => {
      this.isFetching = false;
      this.loadedPosts = data;
    })
  }

  onClearPosts() {
    // Send Http request
  }
}
