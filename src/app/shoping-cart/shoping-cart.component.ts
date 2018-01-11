import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent implements OnInit {

  cart$;
  constructor(private shoppingCartService:ShoppingCartService, private router:Router ) { }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
  }

  checkOut(){
    this.router.navigate(['/check-out']);
  }

  clearCart(){
    this.shoppingCartService.clearCart();
  }
}
