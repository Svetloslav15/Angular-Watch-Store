import {Component, Input, OnInit} from '@angular/core';
import {WatchService} from "../../watch.service";

@Component({
  selector: 'app-favourite-watch',
  templateUrl: './favourite-watch.component.html',
  styleUrls: ['./favourite-watch.component.css']
})
export class FavouriteWatchComponent implements OnInit {
  @Input('name') name: string;
  @Input('price') price: number;
  @Input('imageUrl') imageUrl: string;
  @Input('id') id: string;

  constructor(private watchService: WatchService) {
  }

  ngOnInit() {
  }
}
