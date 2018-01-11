import { Component, OnInit ,OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCart } from '../../models/shopping-cart';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  shipping = {};
  subscription:Subscription;
  cart:ShoppingCart;
  constructor(private cartService:ShoppingCartService, private orderService:OrderService) { }

   async ngOnInit() {
    let cart$ =  await this.cartService.getCart();
    this.subscription = cart$.subscribe(cart => this.cart = cart); 
  }

  placeOrder() {
    let order = {
      datePlaced: new Date().getTime(),
      shipping:this.shipping,
      items: this.cart.items.map(i=>{
        return {
          product:{
            title:i.title,
            imageUrl:i.imageUrl,
            price:i.price
          },
          quantity: i.quantity,
          totalPrice:i.totalPrice
        }
      })
    };
    this.orderService.placeOrder(order);
  }
  
  ngOnDestroy(){ }
}
