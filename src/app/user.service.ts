import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPostDetails(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
  }
}
