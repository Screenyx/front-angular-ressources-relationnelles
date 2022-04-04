import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginFormService {

  constructor(private http: HttpClient) { }
  apiUrl = 'http://localhost:8080/';

  getRessources(){
    return this.http.get<any>(this.apiUrl+'login');
  }
}
