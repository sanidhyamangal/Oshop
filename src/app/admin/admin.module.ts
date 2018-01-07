import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutesModule } from './admin-routes/admin-routes.module';

import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { ProductFormComponent } from './product-form/product-form.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutesModule,
    FormsModule
  ],
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
  ],
  exports:[
    FormsModule
  ]
})
export class AdminModule { }
