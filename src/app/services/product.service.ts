import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProductService {

  constructor(private db:AngularFireDatabase) { }

  save(data){
    return this.db.list('products').push(data);
  }

  getAll(){
    return this.db.list('products');
  }
}
