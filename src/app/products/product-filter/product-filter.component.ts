import { Component, Input, Output,EventEmitter } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent {
  categories$;
  @Input('category') category;
  @Output('filter') filterProducts = new EventEmitter();
  constructor(private categoriesService:CategoriesService) { 
    this.categories$ = categoriesService.getCategories();
  }

  filter(query){
    this.filterProducts.emit(query);
  }
}
