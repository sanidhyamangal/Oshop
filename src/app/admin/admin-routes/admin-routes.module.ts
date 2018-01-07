import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { AdminOrdersComponent } from '../admin-orders/admin-orders.component';
import { AdminProductsComponent } from '../admin-products/admin-products.component';

const adminRoutes:Routes=[
  { path: 'admin/orders', component: AdminOrdersComponent },
  { path: 'admin/products', component: AdminProductsComponent },
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  exports:[RouterModule]
})
export class AdminRoutesModule { }
