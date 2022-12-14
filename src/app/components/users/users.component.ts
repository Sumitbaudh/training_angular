import { Component,ViewChild,OnInit } from '@angular/core';
import {User} from "../../models/user/User"
import { UserService } from 'src/app/services/user.service';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  user:User={
   firstName:'',
   lastName:'',
  }
  users:User[];
  showAddress:boolean=false;
  isEnabled:boolean=true;
  currentClasses:any={};
  currentStyles:any={};
  @ViewChild('userForm') userForm:any;
  data:any;
  constructor(private userService: UserService){
   console.log("Inside constructor");
   
    this.users=[]
  }

  ngOnInit(){
      console.log("Inside ngOnIt");
     this.userService.getData().subscribe(data=>{
      console.log(data)
     });
      this.userService.getUsers().subscribe(users=>{
         this.users=users;
      });
  }


  addressController():boolean{
   return this.showAddress=true;
  }

  setCurrentClasses(){
   this.currentClasses= {
      'border':this.isEnabled,
      'border-success':this.showAddress
   }
  }

  toggleAddress(user:User){
   user.showAddress=!user.showAddress;
  }
  onSubmit({value,valid}:NgForm){
   if(!valid){
      console.log("Form is not valid")
   }
   else{
      this.userService.addUser(value);
      this.userForm.reset();
   }
  }
}

