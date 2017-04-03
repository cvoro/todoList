import {Injectable} from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { Token } from '../models/token';
import { Router, ActivatedRoute } from '@angular/router';


@Injectable()
export class AuthenticationService {

private headers = new Headers({'Content-Type': 'application/json'});
    rec: string;
    token = new Token();
    constructor(private http: Http, private router: Router){}

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
    }

    userLogin(data){
        return this.http.post('http://192.168.0.23:8111/todolist-0.0.1-SNAPSHOT/api/login', data, {headers: this.headers})
            .map((token: Response) => {
           localStorage.setItem('id_token', token.json().id_token)
            })
            // .catch(this.handleError)
    }
    // private setToken(){
    //     let body = response.json();
    // }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('id_token');
    }
     public authenticated() {
         //chech if token is in localStorage
    return tokenNotExpired();
  }
}