import {Component, OnInit, ViewChild} from '@angular/core';
import {WatchService} from "../watch.service";
import {FormBuilder, NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-watch',
  templateUrl: './create-watch.component.html',
  styleUrls: ['./create-watch.component.css']
})
export class CreateWatchComponent implements OnInit {

  @ViewChild('form') form: NgForm;

  constructor(private fb: FormBuilder,
              private watchService: WatchService,
              private router: Router) {
  }

  ngOnInit() {
  }

  createWatch() {
    this.watchService.createWatch(this.form.value)
      .subscribe((data) => {
        console.log(data);
        this.form.reset();
      })
  }
}
