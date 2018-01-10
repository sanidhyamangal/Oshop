import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { AppUser } from '../models/app-user';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  isCollapsed=true;
  appUser:AppUser;
  cart$;
  constructor(private auth:AuthService, private shoppingCartService:ShoppingCartService ) {
   }
  logout(){
    this.auth.logout();
  }
  
  async ngOnInit(){
    this.auth.appUser$.subscribe(appUser=>this.appUser = appUser);
    this.cart$ = await this.shoppingCartService.getCart();
  }
}
