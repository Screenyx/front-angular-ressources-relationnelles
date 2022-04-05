import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class LoginFormService {


  apiUrl = 'http://82.66.95.197:8080/api/';

  constructor(private http: HttpClient) {
    //this.apiUrl = 'http://localhost:8080/';
  }

  login(username: any, password: any): Observable<any> {
    let url = this.apiUrl + 'api/login';
    return this.http.post<any>(url, {
      username: username,
      password: password
    });
  }
}