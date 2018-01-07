import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminRoutesModule } from './admin-routes/admin-routes.module';
import { ProductFormComponent } from './product-form/product-form.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutesModule
  ],
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
  ]
})
export class AdminModule { }
