import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { UserService } from "./user.service";


@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private user:UserService){

    }
   canActivate(){
    if(this.user.getLoggedInUser() != null){
        return true;
    } else {
        return false;
    }
   } 
}