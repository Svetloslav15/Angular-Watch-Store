import { Component, OnInit } from '@angular/core';
import {WatchService} from "../watch.service";
import {IWatch} from "../../home/watch/IWatch";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../authentication/auth.service";

@Component({
  selector: 'app-details-watch',
  templateUrl: './details-watch.component.html',
  styleUrls: ['./details-watch.component.css']
})
export class DetailsWatchComponent implements OnInit {
  watch: IWatch;

  constructor(private watchService: WatchService,
              private authService: AuthService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      const id = data['id'];
      this.watchService.giveDetails(id).subscribe((watch) => {
        this.watch = watch['data'];
      });
    });
  }

}
