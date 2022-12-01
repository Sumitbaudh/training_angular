import { Component } from "@angular/core";

@Component({
    selector:'app-user',
    //template:'<h3>Hello World</h3>',
    templateUrl:'./user.component.html',
    styleUrls:['./user.component.css']
    // styles:[
    //     `
    //     h3 {
    //         color:red
    //     }
    //     `
    // ]
})

 export class UserComponent {
     firstName='Sumit';
     lastName="ABC"

     constructor(){
        this.firstName="Harsh"
        //console.log("Inside constructor",this.firstName)
        this.sayHello()
     }

     sayHello(){
        console.log(`Hello ${this.firstName}`)
     }

}