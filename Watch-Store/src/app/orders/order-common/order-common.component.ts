import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-order-common',
  templateUrl: './order-common.component.html',
  styleUrls: ['./order-common.component.css']
})
export class OrderCommonComponent implements OnInit {
  @Input('id') name: string;
  @Input('price') price: number;
  @Input('isPending') isPending: boolean;
  @Input('isArchived') isArchived: boolean;
  @Input('productsCount') productsCount: number;
  constructor() { }

  ngOnInit() {
  }

}
