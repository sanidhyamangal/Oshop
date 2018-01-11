import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { AdminOrdersComponent } from '../admin-orders/admin-orders.component';
import { AdminProductsComponent } from '../admin-products/admin-products.component';
import { ProductFormComponent } from '../product-form/product-form.component';
import { ManageAdminsComponent } from '../manage-admins/manage-admins.component';

const adminRoutes:Routes=[
  { path: 'orders', component: AdminOrdersComponent },
  { path: 'products/new', component: ProductFormComponent },
  { path: 'products/:id', component: ProductFormComponent },
  { path: 'products', component: AdminProductsComponent },
  { path: 'manage-admins', component: ManageAdminsComponent },
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  exports:[RouterModule]
})
export class AdminRoutesModule { }
