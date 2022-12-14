import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { User } from '../models/user/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];
  data:Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: "HaRsh",
        lastName: "kuMaR",
        age: 45,
        address: {
          street: "5th Markup",
          city: "New York",
          state: "DC"
        },
        isActive: true,
        registrationDate: '2021-03-12',
        balance: 100,
        showAddress: true
      },
      {
        firstName: "Jatin",
        lastName: "Sahoo",
        age: 75,
        address: {
          street: "6th New Street",
          city: "New Delhi",
          state: "Delhi"
        },
        isActive: false,
        registrationDate: '2021-08-01',
        balance: 200,
        showAddress: true
      },
      {
        firstName: "Manish",
        lastName: "Sharma",
        age: 35,
        address: {
          street: "2nd Old Street",
          city: "Lucknow",
          state: "Uttar Pradesh"
        },
        isActive: true,
        registrationDate: '2021-11-21',
        balance: 34,
        showAddress: false

      },

    ]
    this.data=new Observable();
  }

  getData(){
    this.data=new Observable(observer=>{
      setTimeout(()=>{
        observer.next(1)
      },2000)

      setTimeout(()=>{
        observer.next(2)
      },4000)

      setTimeout(()=>{
        observer.next(3)
      },6000)

      setTimeout(()=>{
        observer.next(4)
      },8000)
    })
 return this.data;
    
  }
  getUsers():Observable<User[]>{
    console.log("Inside service")
    return of(this.users);
  }

  addUser(user:User){
    this.users.unshift(user);
  }
}
