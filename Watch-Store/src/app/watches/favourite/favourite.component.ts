import { Component, OnInit } from '@angular/core';
import {IWatch} from "../../home/watch/IWatch";
import {WatchService} from "../watch.service";

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  watches: IWatch[];
  constructor(private watchService: WatchService) { }

  ngOnInit() {
    this.watches = JSON.parse(localStorage.getItem('favourite'));
  }
}
