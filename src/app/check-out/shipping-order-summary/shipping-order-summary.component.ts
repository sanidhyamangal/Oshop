import { ShoppingCart } from '../../models/shopping-cart';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shipping-order-summary',
  templateUrl: './shipping-order-summary.component.html',
  styleUrls: ['./shipping-order-summary.component.css']
})
export class ShippingOrderSummaryComponent {

  constructor() { }
  @Input('cart') cart: ShoppingCart;
  
}
