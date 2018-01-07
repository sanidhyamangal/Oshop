import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { AppUser } from '../models/app-user';
@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  isCollapsed=true;
  appUser:AppUser
  constructor(private auth:AuthService) {
    auth.appUser$.subscribe(appUser=>this.appUser = appUser);
   }
  logout(){
    this.auth.logout();
  }
  
}
