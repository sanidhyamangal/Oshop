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

import { AuthGuard } from './services/auth-guard.service';
import { AdminAuthGuard } from './services/admin-auth-guard.service';

const routes:Routes=[
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'shoping-cart', component: ShopingCartComponent },
    { path: 'check-out', component: CheckOutComponent,canActivate:[AuthGuard]},
    { path: 'order-success', component: OrderSuccessComponent,canActivate:[AuthGuard] },
    { path: 'my/orders', component: MyOrdersComponent,canActivate:[AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'admin/orders', component: AdminOrdersComponent,canActivate:[AuthGuard,AdminAuthGuard] },
    { path: 'admin/products', component: AdminProductsComponent,canActivate:[AuthGuard,AdminAuthGuard] },
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers:[
        AuthGuard,
        AdminAuthGuard
    ]
})
export class AppRoutingModule { }
