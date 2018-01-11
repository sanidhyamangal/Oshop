import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../services/order.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {
  order$;
  orderId;
  constructor(private route:ActivatedRoute,private orderService:OrderService) { }

  async ngOnInit() {
    await this.route.paramMap.subscribe(param=>this.orderId = param.get('id'));
    this.order$ = this.orderService.getOrder(this.orderId);
  }

}
