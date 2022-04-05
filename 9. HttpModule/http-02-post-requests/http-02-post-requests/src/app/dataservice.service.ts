import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Post } from './Post.interface';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private URL:string = 'https://ng-complete-guide-govind-default-rtdb.asia-southeast1.firebasedatabase.app/post.json'; 
  constructor(private http: HttpClient) { }

  createPost(postData:Post){
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

  fetchPosts(){
    // Send Http request
    return this.http.get<{[key:string]:Post}>('https://ng-complete-guide-govind-default-rtdb.asia-southeast1.firebasedatabase.app/post.json')
    .pipe(map(data=>{
      let outputArray:Post[] = []
      for (const key in data){
        outputArray.push({...data[key], id:key});
      }
      return outputArray;
    }))
  }
}
