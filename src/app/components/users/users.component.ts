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
  isEnabled:boolean=true;
  currentClasses:any={};
  currentStyles:any={};
  constructor(){
     this.users=[
      {
      firstName:"HaRsh",
      lastName:"kuMaR",
      age:45,
      address:{
         street:"5th Markup",
         city:"New York",
         state:"DC"
      },
      isActive:true,
      registrationDate:'2021-03-12',
      balance:100
     },
     {
      firstName:"Jatin",
      lastName:"Sahoo",
      age:75,
      address:{
         street:"6th New Street",
         city:"New Delhi",
         state:"Delhi"
      },
      isActive:false,
      registrationDate:'2021-08-01',
      balance:200
     },
     {
      firstName:"Manish",
      lastName:"Sharma",
      age:35,
      address:{
         street:"2nd Old Street",
         city:"Lucknow",
         state:"Uttar Pradesh"
      },
      isActive:true,
      registrationDate:'2021-11-21',
      balance:34
     }
    ]
   this.addressController()
 //  this.setCurrentClasses()
 this.setCurrentStyles()
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
  setCurrentStyles(){
   this.currentStyles={
      'padding-top':this.showAddress?'0':'40px',
      'font-size':this.showAddress?'':'40px',
      'color':(this.showAddress)?'blue':'red'
   }
  }
}



