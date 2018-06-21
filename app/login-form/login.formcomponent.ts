import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
selector:'login-form',
templateUrl:'./login.form.component.html',
styleUrls:['./login.form.component.css']
})

export class LoginFormComponent implements OnInit{
    username:String = '';
    password:String = '';
    loginInvalid = false;
    constructor(private router:Router,private user:UserService){

    }

    ngOnInit(){

    }

    public getUser() {
        return this.user;
    }

    loginUser(e:Event){
        console.log(e);
        var userName = this.username;
        var password = this.password;
        this.user.loginUser(userName,password).subscribe(isUserLoggedIn => {
        if(isUserLoggedIn){
            this.router.navigate(['dashboard']);
        }
        });
    }
}