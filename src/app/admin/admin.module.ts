import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

import { AdminRoutesModule } from './admin-routes/admin-routes.module';

import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductCardComponent } from '../product-card/product-card.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutesModule,
    FormsModule,
    CustomFormsModule
  ],
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
    ProductCardComponent
  ],
  exports:[
    FormsModule,
    CustomFormsModule,
    ProductCardComponent
  ]
})
export class AdminModule { }
