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
  selectedPost:Posts={
    id:0,
    title:'',
    body:''
  }
  isEdit:boolean=false;
  constructor(private userPostsService:UserPostsService){
    this.userPosts=[]
  }

  ngOnInit(): void {
     this.userPostsService.getPosts().subscribe(posts=>{
      this.userPosts=posts
     })
  }

  onNewPost(post:Posts){
    this.userPosts.unshift(post)
  }

  editPost(post:Posts){
    this.selectedPost=post
    this.isEdit=true
  }

  onUpdatedPost(post:Posts){
    this.isEdit=false;
    this.selectedPost={
      id:0,
      title:'',
      body:''
    }

  }

  removePost(post:Posts){
    this.userPostsService.deletePost(post.id).subscribe(()=>{
      this.userPosts.forEach((curr,index)=>{
        if(post.id===curr.id){
          this.userPosts.splice(index,1)
        }
      })
    })
  }
}
