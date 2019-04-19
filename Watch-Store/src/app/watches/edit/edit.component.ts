import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {WatchService} from "../watch.service";
import {IWatch} from "../../home/watch/IWatch";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  watch;
  id;

  constructor(private fb: FormBuilder,
              private watchService: WatchService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.watchService.giveDetails(this.id)
      .subscribe((data) => {
        this.watch = data['data'];
        this.form.controls['name'].setValue(this.watch.name);
        this.form.controls['description'].setValue(this.watch.description);
        this.form.controls['imageUrl'].setValue(this.watch.imageUrl);
        this.form.controls['price'].setValue(this.watch.price);
      });
  }

  editWatch(){
    let dataI = {
      id: this.id,
      name: this.form.controls['name'].value,
      description: this.form.controls['description'].value,
      imageUrl: this.form.controls['imageUrl'].value,
      price: this.form.controls['price'].value
    };
    this.watchService.editWatch(this.id, dataI)
      .subscribe((data) => {
        this.router.navigate(['shop']);
      })
  }

}
