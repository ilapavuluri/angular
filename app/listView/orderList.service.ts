import { Injectable } from "@angular/core";
import { Http,Response,Headers,RequestOptions,URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Rx';



@Injectable()
export class OrderService{

    private orderList:Object;

    constructor(private http:Http){

        this.orderList="";
        
    }

    getOrders():Observable<Boolean>{

        let headers = new Headers({'content-type':'application/x-www-form-urlencoded'});
        let options = new RequestOptions({headers:headers});       
        let body = new URLSearchParams();
        return this.http.get('http://localhost:8083/hotel-services/webapi/orderDetails',{ headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' })} ).map(
            (response:Response) => {
                if(response.status===200){
                    let res:Object= response.json();
                    if(res!==null && res!==undefined){
                        this.setOrderList(res);
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

    public setOrderList(orderList:Object){
        this.orderList=orderList;
    }

    public getOrderList(){
        return this.orderList;
    }
}