import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class LoginFormService {

apiUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {
  //this.apiUrl = 'http://localhost:8080/';
  }

  getRessources(){
    console.log("url : " + this.apiUrl);
    return this.http.get<any>(this.apiUrl+'api/login');
  }

  login(username : any, password: any): Observable<any> {
    let url = this.apiUrl + 'api/login';
    return this.http.post<any>(url, {
      username: username,
      password: password
    });

  }
}
