import { Component } from '@angular/core';
import {User} from "../../models/user/User"

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users:User[];
  showAddress:boolean=false;
  constructor(){
     this.users=[
      {
      firstName:"Harsh",
      lastName:"Kumar",
      age:45,
      address:{
         street:"5th Markup",
         city:"New York",
         state:"DC"
      },
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd7l04O1EbeclTNmOqJ-2_EXWkF0PMAX3Www&usqp=CAU"
     },
     {
      firstName:"Jatin",
      lastName:"Sahoo",
      age:35,
      address:{
         street:"6th New Street",
         city:"New Delhi",
         state:"Delhi"
      }
     },
     {
      firstName:"Manish",
      lastName:"Sharma",
      age:35,
      address:{
         street:"2nd Old Street",
         city:"Lucknow",
         state:"Uttar Pradesh"
      }
     }
    ]
   this.addressController()
  }

  addressController():boolean{
   return this.showAddress=true;
  }
}
