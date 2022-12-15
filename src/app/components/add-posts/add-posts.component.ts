import { Component,EventEmitter,Output } from '@angular/core';
import { UserPostsService } from 'src/app/services/user-posts.service';
import { Posts } from 'src/app/models/user/Posts';
@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css']
})
export class AddPostsComponent {

  @Output() newPost:EventEmitter<Posts>=new EventEmitter();

  constructor(private userPosts:UserPostsService){

  }

  addPost(title:string,body:string){
    if(!title||!body){
      console.log("empty fields found")
    }
    else{
      this.userPosts.savePost({title,body}as Posts).subscribe(post=>{
        this.newPost.emit(post);
      })
    }
  }

}
