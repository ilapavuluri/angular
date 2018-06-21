import { Router } from '@angular/router';
import {Component, OnInit} from '@angular/core';

@Component({
selector:'app-header',
templateUrl:'./header.component.html',
styleUrls:['./header.component.css']

})

export class HeaderComponent implements OnInit{
    constructor(private router:Router){

    }

    ngOnInit(){


    }

    isLoggedOut(){
        let accessToken = localStorage.getItem("X-AccessToken");
        if(accessToken==null || accessToken == undefined){
            return true;
        } else {
            return false;
        }
    }

    logout(){
        console.log("logout");
        this.router.navigate(['login']);
        localStorage.removeItem("X-AccessToken");
        localStorage.removeItem("username");
    }
}