import {Component, Input, OnInit} from '@angular/core';
import {WatchService} from "../../watch.service";

@Component({
  selector: 'app-cart-watch',
  templateUrl: './cart-watch.component.html',
  styleUrls: ['./cart-watch.component.css']
})
export class CartWatchComponent implements OnInit {
  @Input('name') name: string;
  @Input('price') price: number;
  @Input('imageUrl') imageUrl: string;
  @Input('id') id: string;

  constructor(private watchService: WatchService) { }

  ngOnInit() {
  }

}
