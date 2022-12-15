import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Posts } from '../models/user/Posts';

const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserPostsService {
  private postsUrl:string='https://jsonplaceholder.typicode.com/posts'

  constructor(private http:HttpClient) { }

  getPosts(): Observable<Posts[]>{
    return this.http.get<Posts[]>(this.postsUrl)
  }

  savePost(post:Posts):Observable<Posts>{
    return this.http.post<Posts>(this.postsUrl,post,httpOptions)
  }
}
