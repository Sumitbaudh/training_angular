import { Component,OnInit } from '@angular/core';
import { UserPostsService } from 'src/app/services/user-posts.service';
import { Posts } from 'src/app/models/user/Posts';
@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  userPosts:Posts[];
  constructor(private userPostsService:UserPostsService){
    this.userPosts=[]
  }

  ngOnInit(): void {
     this.userPostsService.getPosts().subscribe(posts=>{
      this.userPosts=posts
     })
  }
}
