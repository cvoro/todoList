// import { Injectable }      from '@angular/core';
// import { tokenNotExpired } from 'angular2-jwt';
// import { Http,HttpModule, Headers } from '@angular/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';


// import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// // import {require} from 'angular2-jwt';

// // Avoid name not found warnings
// declare var Auth0Lock: any;
//     //let Auth0Lock = require('auth0-lock').default;

// @Injectable()
// export class Login{
//   // Configure Auth0
//    public token: string;
//     private tokenKey:string = 'id_token';


//     private headers = new Headers({'Content-Type': 'application/json'});
// //   lock = new Auth0Lock('2CzTcVraFEHIwHHR9MMb2LZF7m6qf6Kj', 'cvoro.eu.auth0.com', {});

//   constructor(public http:Http) {
//     // Add callback for lock `authenticated` event
//     // this.lock.on("authenticated", (authResult) => {
//     //   localStorage.setItem('id_token', authResult.idToken);
//     // });
//   }
//    private handleError(error: any): Promise<any> {
//     console.error('An error occurred', error); 
//     return Promise.reject(error.message || error);
//     }

//  public logovanje(data){
//     // Call the show method to display the widget.
//     return this.http.post('http://192.168.0.23:8111/todolist-0.0.1-SNAPSHOT/api/login', data, {headers: this.headers})
//         .map(res => res.json())
//       .subscribe(
//         // We're assuming the response will be an object
//         // with the JWT on an id_token key
//         data => localStorage.setItem('id_token', data.id_token),
//         error => console.log(error)
//       );
    
//     // this.lock.show();
//   }
//   //  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//   //       if (localStorage.getItem('currentUser')) {
//   //           // logged in so return true
//   //           return true;
//   //       }

//   //       // not logged in so redirect to login page with the return url
//   //       this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
//   //       return false;
//   //   }
//       //    .subscribe(
//     private store(content:Object) {
//         localStorage.setItem(this.tokenKey, JSON.stringify(content));
//     }
//       // data => this.saveJwt(data.id_token),

//   public authenticated() {
//     // Check if there's an unexpired JWT
//     // This searches for an item in localStorage with key == 'id_token'
//     return tokenNotExpired();
//   }

  
// }