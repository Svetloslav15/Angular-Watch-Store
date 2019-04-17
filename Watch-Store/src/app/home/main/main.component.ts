import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../authentication/auth.service";
import {IWatch} from "../watch/IWatch";
import {WatchService} from "../../watches/watch.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  watches: IWatch[];

  constructor(private authService: AuthService,
              private watchService: WatchService) {
  }

  ngOnInit() {
    this.watchService.getTopThree()
      .subscribe((data) => {
        this.watches = data['data'];
      })
  }
}
