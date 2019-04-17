import { Component, OnInit } from '@angular/core';
import {IWatch} from "../../home/watch/IWatch";
import {WatchService} from "../watch.service";

@Component({
  selector: 'app-watches-all',
  templateUrl: './watches-all.component.html',
  styleUrls: ['./watches-all.component.css']
})
export class WatchesAllComponent implements OnInit {
  watches: IWatch[];

  constructor(private watchService: WatchService) { }

  ngOnInit() {
    this.watchService.getAll()
      .subscribe((data) => {
        this.watches = data['data'];
      })
  }
}
