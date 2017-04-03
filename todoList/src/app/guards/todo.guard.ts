import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class TodoGuard implements CanActivate {

    constructor(private router: Router) { }

//     canDeactivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//         if (localStorage.getItem('id_token')) {
//             // logged in so return true
//         this.router.navigate(['/todo'], { queryParams: { returnUrl: state.url }});
//             return true;
//         }
//  this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
//         // not logged in so redirect to login page with the return url
//         return false;
//     }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!(localStorage.getItem('id_token'))) {
            //not logged in so return true
            return true;
        }

            this.router.navigate([this.router.url]);
        //  logged in so redirect to some other page with the return url
        //this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
//       canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//           console.log("can activate called!!!")
//     let url: string = state.url;

//     return this.checkLogin(url);
//   }

//   checkLogin(url: string): boolean {
//     if (!(localStorage.getItem('id_token'))) { return true; }

//     // Store the attempted URL for redirecting
//     //this.authService.redirectUrl = url;

//     // Navigate to the login page with extras
//     this.router.navigate(['/']);
//     return false;
//   }
}
