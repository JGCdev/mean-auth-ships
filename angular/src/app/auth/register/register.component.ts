import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  dataLoading: boolean = false;
  userToBeRegistered: User;
  error: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private as: AuthService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      first_name: [ '', [Validators.required, Validators.minLength(3)]],
      last_name: [ '', [Validators.required, Validators.minLength(3)]],
      username: [ '', [Validators.required, Validators.minLength(3)]],
      email: [ '', [Validators.required, Validators.minLength(6)]],
      password: [ '', [Validators.required, Validators.minLength(6)]],
    })
  }

  registerUser(): void {
    if (this.registerForm.invalid) { return }

    this.userToBeRegistered = {
      firstname: this.registerForm.value.first_name,
      lastname:this.registerForm.value.last_name,
      email:this.registerForm.value.email,
      username:this.registerForm.value.username,
      password: this.registerForm.value.password,
      token: ''
    };

    this.as.register(this.userToBeRegistered).subscribe(
      (res: any) => {
        localStorage.setItem('access_token', res.token)
        this.as.userChange$.next({
            loggedIn: true
        });
        this.router.navigate([''])
      },
      (err: any) => {
        this.error = err.error.message;
      }
    );
    
  }

}
