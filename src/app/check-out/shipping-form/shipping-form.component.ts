import { Component, OnInit ,OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCart } from '../../models/shopping-cart';
import { OrderService } from '../../services/order.service';
import { AuthService } from '../../services/auth.service';
import { Order } from '../../models/order';
import { Router } from '@angular/router';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  shipping = {};
  subscription:Subscription;
  cart:ShoppingCart;
  userId;
  constructor(private cartService:ShoppingCartService, private orderService:OrderService, private authService:AuthService, private router:Router) { }

   async ngOnInit() {
    let cart$ =  await this.cartService.getCart();
    this.subscription = cart$.subscribe(cart => this.cart = cart); 
    this.authService.user$.subscribe(user=>this.userId = user.uid);
  }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['order-success',result.key]);
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
   }
}
