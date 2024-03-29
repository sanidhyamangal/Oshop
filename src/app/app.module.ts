import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShippingFormComponent } from './check-out/shipping-form/shipping-form.component';
import { ShippingOrderSummaryComponent } from './check-out/shipping-order-summary/shipping-order-summary.component';

import { AppRoutingModule } from './app-routes.module';

import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { CategoriesService } from './services/categories.service';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { OrderService } from './services/order.service';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    ProductsComponent,
    LoginComponent,
    HomeComponent,
    CheckOutComponent,
    MyOrdersComponent,
    OrderSuccessComponent,
    ShopingCartComponent,
    ProductFilterComponent,
    ShippingFormComponent,
    ShippingOrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    NgbModule.forRoot(),
  ],
  providers: [
    AuthService,
    UserService,
    CategoriesService,
    ProductService,
    ShoppingCartService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
