import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
// import {Login} from '../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import {AlertService} from '../services/alert.service';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['../app.component.css'],
  providers:[AuthenticationService, AlertService]

})
export class LoginComponent {
  title = 'this is login!!';
  data = {};
  token = {};
   model: any = {};
    loading = false;
    returnUrl: string;
constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }
  ngLogin(data) {
    // Call the show method to display the widget.
    return this.authenticationService.userLogin(this.data)
                 .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
  }
  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    this.router.navigate(['/login']);
  }
  goToAboutPage() {
    this.router.navigate(['/todo']); // here "About" is path
}
    ngOnInit() {
        // reset login status
        //this.authenticationService.logout();
 
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/todo';
    }
 
    // login() {
    //     this.loading = true;
    //     this.authenticationService.userLogin(this.data)
          
                
    //                 // login successful so redirect to return url
    //                 this.router.navigate([this.returnUrl]);
                
    //             error => {
    //                 // login failed so display error
    //                 this.alertService.error(error);
    //                 this.loading = false;
    //             };
    // }
}
