import { Component, OnInit } from '@angular/core';
import {OrderService} from "../order.service";

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {
  orders;
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getPendingOrders()
      .subscribe((data) => {
      this.orders = data['data'];
    });
  }

}
