import {Injectable} from "@angular/core";
import {Headers, RequestOptions, Response, Http} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/Rx';

@Injectable()
export class rateService {
    constructor( private http: Http) {
        
        
      }
      addRating(requestObject): any {
    
        
                let headers = new Headers({
                    'Content-Type': 'application/json'
        
                });
                let options = new RequestOptions({ headers: headers });
                let reqObj = requestObject;
        
                 let url='http://localhost:1337/add/rating/'; 
        
                return this.http.post(url, reqObj, options)
                    .map((res: Response) => {
                        console.log("inside map", res.json());
                        return res.json();
                    })
                    .catch((error: any) => {
                        console.log("inside catch");
                        return Observable.throw(error.json().error || "Server error");
                    });
            }
        
}