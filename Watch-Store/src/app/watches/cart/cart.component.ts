import { Component, OnInit } from '@angular/core';
import {WatchService} from "../watch.service";
import {IWatch} from "../../home/watch/IWatch";
import {OrderService} from "../../orders/order.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  watches: IWatch[];
  constructor(private watchService: WatchService,
              private orderService: OrderService,
              private router: Router) { }

  ngOnInit() {
    this.watches = JSON.parse(localStorage.getItem('cart'));
  }
  checkout(){
    this.orderService.createOrder()
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['shop']);
      })
  }
}
