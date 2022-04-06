import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './Post.interface';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  error: Subject<string> = new Subject();
  private URL:string = 'https://ng-complete-guide-govind-default-rtdb.asia-southeast1.firebasedatabase.app/post.json'; 
  constructor(private http: HttpClient) { }

  createPost(postData:Post){
    // Send Http request
    this.http
      .post(
        this.URL,
        postData,
        {
          // By setting this we get the entire response object inside the subscribe instead of parsed body.
          observe: 'response',
          // Tell angular about the type of response data (we can tell if we want it to be xml, text or any blob so that it will parse accordingly)
          responseType: 'json'
        }
      )
      .subscribe(responseData => {
        console.log(responseData);
      }, 
      error => {
        this.error.next(error.message);
      });
  }

  fetchPosts(params?){
    // Send Http request
    return this.http.get<{[key:string]:Post}>(this.URL, {
      headers:{'Accept':'application/xml; charset=utf-8'},
      params:params || {'print':'pretty'}
    })
    .pipe(map(data=>{
      let outputArray:Post[] = []
      for (const key in data){
        outputArray.push({...data[key], id:key});
      }
      return outputArray;
    }))
  }

  clearPosts(){
    return this.http.delete(this.URL);
  }
}
