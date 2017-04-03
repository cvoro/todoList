import { Component } from '@angular/core';
import {AuthenticationService} from './services/authentication.service';
// import {Login} from './services/login.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AuthenticationService]
})
export class AppComponent {
  title = 'app works!';

  constructor(private authenticationService: AuthenticationService,
   private route: ActivatedRoute,
        private router: Router,){}
  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
  }
}
