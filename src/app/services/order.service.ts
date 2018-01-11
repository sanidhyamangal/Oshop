import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class OrderService {

  constructor(private db:AngularFireDatabase) { }

  placeOrder(order){
    this.db.list('orders/').push(order);
  }
}
