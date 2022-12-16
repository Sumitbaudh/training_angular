import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/models/user/Posts';
import { UserPostsService } from 'src/app/services/user-posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 post:Posts={
  id:0,
  title:"",
  body:""
 }
  constructor(
    private postService:UserPostsService,
    private route: ActivatedRoute
    ){ }

    ngOnInit(){
      const id = this.route.snapshot.paramMap.get('id')||"";
      this.postService.getPostById(id).subscribe(post=>this.post=post)
    }

}
