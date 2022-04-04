import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ParametersService {

  constructor(private http: HttpClient) { }
  apiUrl = 'http://localhost:8080/';

  getFunctionExample(){
    return this.http.get<any>(this.apiUrl+'parameters');
  }
}
