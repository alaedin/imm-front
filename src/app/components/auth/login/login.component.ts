import {Component, OnInit} from '@angular/core';
import {LoginForm} from '../../../model/login-form';
import {Router} from '@angular/router';
import {interval} from 'rxjs';
import {AuthService} from '../../../config/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService) {
  }

  forgotPassword: boolean;
  loginForm: LoginForm = new LoginForm();

  ngOnInit(): void {
  }

  checkForgotPassword = () => {
    this.forgotPassword = true;
    console.log(this.forgotPassword);
  }

  authenticate = () => {
    console.log(this.loginForm);
    this.authService.authenticate(this.loginForm)
      .subscribe(
        data => {
          localStorage.setItem('token', data.body.token);
          localStorage.setItem('role', JSON.stringify(data.body.authorities));
          this.router.navigate(['dashboard']);
          interval(3000).subscribe(x => {
            location.reload();
          });
          console.log(data.body);
          //  console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }
}
