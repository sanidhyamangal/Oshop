import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Observable } from 'rxjs/Observable';

import { ProductService } from '../../services/product.service';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$:Observable<any>;
  constructor(private categoriesService:CategoriesService, private productService:ProductService) {
    this.categories$ = this.categoriesService.getCategories();
   }
  ngOnInit() {
  }
  submitproductForm(formValue){
    this.productService.save(formValue);
  }
}
