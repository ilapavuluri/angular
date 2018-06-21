import { Injectable } from "@angular/core";
import { Http,Response,Headers,RequestOptions,URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { UserInfo, LoginResponse } from '../model/menuItem.model';
import { HttpHeaders,HttpClient } from '@angular/common/http';

@Injectable()
export class UserService{
    private isUserLoggedIn:Boolean;
    private username:String;
    constructor(private http:HttpClient){
        this.isUserLoggedIn=false;
    }

    loginUser(userName:String,password:String):Observable<{UserInfo:any}>{
        let headers = new Headers({'content-type':'application/x-www-form-urlencoded'});
        let options = new RequestOptions({headers:headers});
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/x-www-form-urlencoded',
              'Access-Control-Allow-Origin' :'*',
              'Accept' : 'application/json',
              'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding',  
              'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, DELETE, PUT',
              'Authorization': 'my-auth-token'
            })
        };
        let loginInfo = {username:userName,password:password};
        let body = new URLSearchParams();
        body.set('username', userName.toString());
        body.set('password', password.toString());
        return this.http.post('http://localhost:8083/hotel-services/webapi/user/login',body.toString(),httpOptions ).map(
            (response:LoginResponse) => {
                if(response != undefined){
                   localStorage.setItem("X-AccessToken",response.token);
                   localStorage.setItem("username",response.username);
                   this.SetUserLoggedIn(true);
                   this.setLoggedInUser(response.username);
                   return true;
                    //here based on the status we are returing true or false in general we gets the response.json() and returns that.
                } else {
                    return false;
                }
            }
        ).catch(this.handleError);
    }

    SetUserLoggedIn(userLoggedIn:Boolean){
        this.isUserLoggedIn=userLoggedIn
    }

    setLoggedInUser(userName:String){
        this.username=userName;
    }

   
    getLoggedInUser(){
        return localStorage.getItem("username");
    }
    private handleError(error:Response){
        return Observable.throw(error.statusText);
    }
}