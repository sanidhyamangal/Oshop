import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';


const routes:Routes=[
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'shoping-cart', component: ShopingCartComponent },
    { path: 'check-out', component: CheckOutComponent },
    { path: 'order-success', component: OrderSuccessComponent },
    { path: 'login', component: LoginComponent },
    { path: 'admin/orders', component: AdminOrdersComponent },
    { path: 'admin/products', component: AdminProductsComponent },
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
