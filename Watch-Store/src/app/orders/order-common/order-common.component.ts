import {Component, Input, OnInit} from '@angular/core';
import {OrderService} from "../order.service";
import {AuthService} from "../../authentication/auth.service";

@Component({
  selector: 'app-order-common',
  templateUrl: './order-common.component.html',
  styleUrls: ['./order-common.component.css']
})
export class OrderCommonComponent implements OnInit {
  @Input('_id') id: string;
  @Input('price') price: number;
  @Input('isPending') isPending: boolean;
  @Input('isArchived') isArchived: boolean;
  @Input('productsCount') productsCount: number;

  constructor(private orderService: OrderService,
              private authService: AuthService) {
  }

  isAdmin() {
    return this.authService.isAdmin();
  }
}
