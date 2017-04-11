import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username: string;
  private password: string;
  private loginEnabled: boolean= true;
  private loginMessage: string;

  constructor(private authService: AuthService,
    private router: Router) { }

  loginClick(){
    this.loginEnabled = false;
    this.loginMessage = null;
    this.authService.login(this.username, this.password).then((success)=>{
      this.router.navigate(['/']);
    }, (error)=>{
      this.loginMessage = error.message;
    })
  }

  ngOnInit() {
  }

}
