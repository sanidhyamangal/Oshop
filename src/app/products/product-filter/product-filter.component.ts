import { Component, Input } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent {
  categories$;
  @Input('category') category;
  constructor(private categoriesService:CategoriesService) { 
    this.categories$ = categoriesService.getCategories();
  }
}
