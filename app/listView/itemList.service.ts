import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Http,Response,Headers,RequestOptions,URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Rx';



@Injectable()
export class MenuService{

    private menuList:Object;

    constructor(private http:HttpClient){

        this.menuList="";
        
    }

    getMenuList():Observable<Boolean>{

       // let headers = new Headers({'content-type':'application/x-www-form-urlencoded'});
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/x-www-form-urlencoded',
              'Access-Control-Allow-Origin' :'*',
              'Accept' : 'application/json',
              'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding',  
              'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, DELETE, PUT',
              'Authorization': 'my-auth-token',
              'my-auth-token':localStorage.getItem("X-AccessToken")
            })
        };
       // let options = new RequestOptions({headers:headers});       
        let body = new URLSearchParams();
        return this.http.get('http://localhost:8083/hotel-services/webapi/menu',httpOptions ).map(
            (response:Response) => {
                if(response!=undefined){
                    this.setMenuItems(response);
                    //here based on the status we are returing true or false in general we gets the response.json() and returns that.
                } else {
                    return false;
                }
            }
        ).catch(this.handleError);
    }

    createOrder(userName:String,itemName:String,quantity:String):Observable<Boolean>{
       // let headers = new Headers({'content-type':'application/x-www-form-urlencoded'});
        //let options = new RequestOptions({headers:headers});
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/x-www-form-urlencoded',
              'Access-Control-Allow-Origin' :'*',
              'Accept' : 'application/json',
              'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding',  
              'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, DELETE, PUT',
              'Authorization': 'my-auth-token',
              'my-auth-token':localStorage.getItem("X-AccessToken")
            })
        };
      //  let loginInfo = {username:userName,password:password};
        let body = new URLSearchParams();
        body.set('customerName', userName.toString());
        body.set('itemName', itemName.toString());
        body.set('quantity', quantity.toString());
        return this.http.post('http://localhost:8083/hotel-services/webapi/orderDetails/create',body.toString(),httpOptions ).map(
            (response:Response) => {
                if(response.status===200){
                    let res:Object= response.json();
                    if(res!==null && res!==undefined){
                       // this.SetUserLoggedIn(true);
                        return true;
                    } else {
                        return false;
                    }
                    //here based on the status we are returing true or false in general we gets the response.json() and returns that.
                } else {
                    return false;
                }
            }
        ).catch(this.handleError);
   
    }

        private handleError(error:Response){
            return Observable.throw(error.statusText);
        }

        public setMenuItems(menuList:Object){
            this.menuList=menuList;
        }

        public getMenuItems(){
            return this.menuList;
        }



    }