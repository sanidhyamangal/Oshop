import { Component,OnInit,OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CategoriesService } from '../services/categories.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/app-product';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,OnDestroy {
  products:Product[]=[];
  filteredProducts:Product[]=[];
  category;
  filteredbyCategorty:Product[]=[];
  subscription:Subscription
  cart;
  constructor(private route:ActivatedRoute,private productService:ProductService, private shoppingCartService:ShoppingCartService) { 
     productService.getAll().switchMap(products=>{
       this.products = products;
       return this.route.queryParamMap
     }).subscribe(cateory=>{
        this.category = cateory.get('category');
        this.filteredbyCategorty = this.filteredProducts = (this.category)?this.products.filter(p=>p.categories === this.category):this.products;
      });
  }

  filterProducts(query:string){
    this.filteredProducts = (query)?this.products
      .filter(p=>p.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
      :this.filteredbyCategorty;
  }

  async ngOnInit(){
    this.subscription = (await this.shoppingCartService.getCart()).subscribe(cart=>{
      this.cart = cart;
    });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
