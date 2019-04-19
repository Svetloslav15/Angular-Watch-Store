import { Component, OnInit } from '@angular/core';
import {OrderService} from "../order.service";

@Component({
  selector: 'app-archived',
  templateUrl: './archived.component.html',
  styleUrls: ['./archived.component.css']
})
export class ArchivedComponent implements OnInit {
  orders;
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getArchivedOrders()
      .subscribe((data) => {
        this.orders = data['data'];
      });
  }
}
