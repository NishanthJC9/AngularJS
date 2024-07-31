import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(private http: HttpClient) { }

  getBookDetails(){
    return this.http.get("https://jsonplaceholder.typicode.com/todos")
  }
}
