import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, NgForm, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('form') form: NgForm;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  registerUser () {
    if (this.form.value.password !== this.form.value.repeatPassword){
      this.router.navigate(['/register']);
      return;
    }
    this.authService.registerUser(this.form.value)
      .subscribe((data) => {
        localStorage.setItem('token', data["token"]);
        localStorage.setItem('username', data["username"]);
        localStorage.setItem('userId', data["userId"]);
        localStorage.setItem('isAdmin', data['roles'].includes('Admin'));

        this.router.navigate(['home']);
      });
  }
}
