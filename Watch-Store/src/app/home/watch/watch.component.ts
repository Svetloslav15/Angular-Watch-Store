import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../authentication/auth.service";
import {IWatch} from "./IWatch";
import {WatchService} from "../../watches/watch.service";

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {
  @Input('name') name: string;
  @Input('price') price: number;
  @Input('imageUrl') imageUrl: string;
  @Input('id') id: string;

  constructor(private authService: AuthService,
              private watchService: WatchService) { }

  ngOnInit() {

  }

}
