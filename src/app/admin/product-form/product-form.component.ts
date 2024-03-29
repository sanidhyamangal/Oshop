import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Observable } from 'rxjs/Observable';
import { Router,ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';


import { ProductService } from '../../services/product.service';
@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$:Observable<any>;
  id;
  product={};
  constructor(private categoriesService:CategoriesService, private productService:ProductService, private router:Router, private route:ActivatedRoute) {
    this.categories$ = this.categoriesService.getCategories();
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.productService.getProduct(this.id).take(1).subscribe(product=>this.product = product);
   }
  ngOnInit() {
  }
  submitproductForm(formValue){
    if(this.id) this.productService.update(this.id,formValue);
    else this.productService.save(formValue);
    this.router.navigate(['/admin/products']);
  }

  delete(){
    if(!confirm("Are you sure you want to delete this product?")) return;

    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
  }
}
