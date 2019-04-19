import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-order-watch',
  templateUrl: './order-watch.component.html',
  styleUrls: ['./order-watch.component.css']
})
export class OrderWatchComponent implements OnInit {
  @Input('name') name: string;
  @Input('imageUrl') imageUrl: string;
  @Input('price') price: number;

  constructor() {
  }

  ngOnInit() {
  }

}
