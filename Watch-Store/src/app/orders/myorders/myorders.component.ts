import { Component, OnInit } from '@angular/core';
import {OrderService} from "../order.service";

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {
  orders;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getMine()
      .subscribe((data) => {
        this.orders = data['data'];
        console.log(this.orders[0].isPending);
      })
  }

}
