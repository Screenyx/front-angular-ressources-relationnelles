import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDTO } from '../profile/user.DTO';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) { }
  apiUrl = 'http://localhost:8080/';

  getRessources(){
    return this.http.get<any>(this.apiUrl+'resources');
  }
}
