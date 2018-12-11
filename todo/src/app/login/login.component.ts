import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HardcodedAuthenticationService} from "../service/hardcoded-authentication.service";
import {BasicAuthService} from "../service/basic-auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'in28minutes'
  password = ''
  errorMessage = 'invalid credentials'
  invalidLogin = false

  constructor(
    private router: Router,
    private hardCodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthService: BasicAuthService) {
  }


  handleAuthLogin() {
    this.basicAuthService.executeAuthenticationService(this.username,this.password).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['welcome',this.username])
          this.invalidLogin = false;
        },
        error => {
          console.log(error)
          this.invalidLogin = true;
        }
    )
  }

  ngOnInit() {
  }

}
