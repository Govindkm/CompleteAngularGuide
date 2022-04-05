import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './Post.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.onFetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.http
      .post(
        'https://ng-complete-guide-govind-default-rtdb.asia-southeast1.firebasedatabase.app/post.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.http.get<{[key:string]:Post}>('https://ng-complete-guide-govind-default-rtdb.asia-southeast1.firebasedatabase.app/post.json')
    .pipe(map(data=>{
      let outputArray:Post[] = []
      for (const key in data){
        outputArray.push({...data[key], id:key});
      }
      return outputArray;
    }))
    .subscribe(data=>{
      debugger;
      this.loadedPosts = data;
    })
  }

  onClearPosts() {
    // Send Http request
  }
}
