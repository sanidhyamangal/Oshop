import { Component, Input } from '@angular/core';
import { Product } from '../models/app-product';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  constructor(private cartService:ShoppingCartService ) { }

  addToCart(product){
    this.cartService.addToCart(product);
  }
}
