import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit {
  shipping = {};
  constructor() { }

  ngOnInit() {
  }

  placeOrder() {
    console.log(this.shipping);
  }    
}