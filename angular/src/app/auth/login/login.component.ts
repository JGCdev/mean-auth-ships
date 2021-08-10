import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'src/app/core/models/auth';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  dataLoading: boolean = false;
  unregistered: boolean = false;
  invalid: boolean = false;
  authCredentials: Auth;
  error: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private as: AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [ '', [Validators.required, Validators.minLength(3)]],
      password: [ '', [Validators.required, Validators.minLength(6)]]
    })
  }
  loginUser() {
    if (this.loginForm.invalid) { return }

    this.authCredentials = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    };

    this.as.login(this.authCredentials).subscribe(
      (res: any) => {
        localStorage.setItem('access_token', res.token)
        this.as.userChange$.next({
            loggedIn: true
        });
        this.router.navigate([''])
      },
      (err: any) => {
        this.error = err.message;
      }
    );
  }
}

