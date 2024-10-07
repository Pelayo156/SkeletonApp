import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // Variables ingresadas por el usuario
  public email : string = '';
  public password : any = '';

  constructor(
    private router: Router, 
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  login() {
    if(this.loginService.validateUser(this.email, this.password)) {
      this.router.navigate(['/home']);
    } else {
      alert('Usuario o Contraseña incorrectos!!');
    }
  }
}