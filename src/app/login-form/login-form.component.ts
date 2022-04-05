import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginFormService } from './login-form.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [LoginFormService]
})
export class LoginFormComponent implements OnInit {

  model: any = {};
  sessionId: any = "";

  constructor(
    private router: Router,
    private http: HttpClient,
    private loginService: LoginFormService
  ) { }

  ngOnInit(): void {
  }

  login() {
    console.log("model :  ", this.model)
    this.loginService.login(this.model.username, this.model.password).subscribe(res => {
      if (res) {
        this.sessionId = res.sessionId;

        sessionStorage.setItem(
          'token',
          this.sessionId
        );
        this.router.navigate(['']);
      } else {
        alert("Authentication failed.")
      }
    });

  }
}
