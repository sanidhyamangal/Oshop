import { Component, OnDestroy} from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnDestroy {
  orders;
  filteredOrders;
  subscription:Subscription;
  constructor(private orderService:OrderService) {
    this.subscription =  this.orderService.getOrders().subscribe(orders=>{
      this.filteredOrders = this.orders = orders;
    });
   }

   ngOnDestroy(){
     this.subscription.unsubscribe();
   }

   filter(query:String){
     this.filteredOrders = (query)?this.orders.filter(o=>o.shipping.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())):this.orders;
   }
}
