import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  constructor(private categoriesService:CategoriesService) {
    this.categories$ = this.categoriesService.getCategories();
   }
  ngOnInit() {
  }

}
