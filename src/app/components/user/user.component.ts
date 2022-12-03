import { Component } from "@angular/core";
import {User} from "../../models/user/User"
@Component({
    selector:'app-user',
    templateUrl:'./user.component.html',
    styleUrls:['./user.component.css']
})

 export class UserComponent {
   User:User
     constructor(){
        this.User={
         firstName:"Harsh",
         lastName:"Kumar",
         age:45,
         address:{
            street:"5th Markup",
            city:"New York",
            state:"DC"
         }
        }
     }
}
