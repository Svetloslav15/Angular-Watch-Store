import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {ToastContainerDirective, ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild(ToastContainerDirective) toastContainer: ToastContainerDirective;
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit() {
  }

  loginUser(){
    this.authService.loginUser(this.form.value)
      .subscribe((data) => {
        localStorage.setItem('token', data["token"]);
        localStorage.setItem('username', data["username"]);
        localStorage.setItem('userId', data["userId"]);
        localStorage.setItem('isAdmin', data['roles'].includes('Admin'));
        this.router.navigate(['home']);
      });
  }
}
