import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ProductService } from '../../services/product.service';
import { Product } from '../../models/app-product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit,OnDestroy {
  products:Product[];
  filteredProducts:Product[];
  subscription:Subscription;
  constructor(private productService:ProductService) {
    this.subscription = this.productService.getAll()
      .subscribe(products=>this.filteredProducts = this.products = products);
   }
  filter(query:string){
    this.filteredProducts  = (query)?this.products.filter(p=>p.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())):this.products;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  ngOnInit() {
  }

}
