import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDTO } from './user.DTO';

@Injectable()
export class ProfileService {
  
  constructor(private http: HttpClient) { }
  apiUrl = 'http://localhost:8080/';

  getUsers(){
    return this.http.get<UserDTO[]>(this.apiUrl+'users');
  }
}
