import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { LoginDetails } from './login';
import { LoginResponse } from './loginResponse';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  hide : boolean =  true;
  showSpinner: boolean = false;
  userName: string;
  password: string;

  constructor(private router: Router,
              private loginService: LoginService) { }

  login(): void {
    let loginDetails: LoginDetails = new LoginDetails();
    loginDetails.username = this.userName;
    loginDetails.password = this.password;
    console.log(loginDetails);

    this.loginService.performLogin(loginDetails)
        .subscribe(
            (data: LoginResponse) => { 
                    console.log(data)
                    if(data)
                      localStorage.setItem('my-token', data.jwtToken);
                    else
                    localStorage.setItem('my-token', null);
                    },
            (err: any) => console.log('Incorrect Username or Password!'),
            () => {
              this.router.navigate(['/home-page']);
            }
        );

    //this.loginService.performLogin()
    // if(this.userName == "admin" && this.password == "admin"){
    //   this.router.navigate(['/home-page']);
    //   this.showSpinner = true;
    //   console.log(this.userName + " " + this.password + " " + "Success!");
    // } else {
    //   this.router.navigate(['/login']);
    //   this.showSpinner = false;
    //   console.log(this.userName + " " + this.password + " " + "Failed!");
    // }
  }
}