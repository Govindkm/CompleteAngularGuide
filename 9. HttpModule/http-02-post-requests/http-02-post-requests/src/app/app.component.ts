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
  error:String = '';
  constructor(private dataService:DataserviceService) {}

  ngOnInit() {
    this.dataService.error.subscribe(data => {
      this.error = data;
    })
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
    },
    error => {
      this.error = error.message
    }
    )
  }

  onClearPosts() {
    // Send Http request
    this.dataService.clearPosts().subscribe(data => console.log(this.loadedPosts = []));
  }
}
