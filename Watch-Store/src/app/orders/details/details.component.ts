import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OrderService} from "../order.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  order;

  constructor(private orderService: OrderService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      const id = data['id'];
      this.orderService.giveDetails(id).subscribe((order) => {
        this.order = order['data'];
      });
    });
  }

}
