import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import 'rxjs/add/operator/take';
import { Product } from '../models/app-product';

@Injectable()
export class ShoppingCartService {

  constructor(private db:AngularFireDatabase) { }

  private create(){
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  async getCart(){
    let cartId = await this.getOrCreateCartId()
    return this.db.object('shopping-carts/' +cartId);
  }

  private getItem(cartId,productId){
    return this.db.object('shopping-carts/'+cartId+'/items/'+productId);
  }
  private async getOrCreateCartId():Promise<string>{
    let cartId = localStorage.getItem('cartId');

    if(cartId) return cartId;

    let result = await this.create();
    localStorage.setItem('cartId',result.key);
    return result.key;
  }

   private async updateCart(product:Product,change:number) {
    let cartId = await this.getOrCreateCartId();
    let items$ = this.getItem(cartId,product.$key);
    items$.take(1).subscribe(item=>{
      items$.update({product:product,quantity:(item.quantity || 0)+change});
    });
  }
  async addToCart(product:Product){
    this.updateCart(product,1);
  }

  async removeFromCart(product:Product){
    this.updateCart(product,-1);
  }
}
