import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDTO } from './user.DTO';

@Injectable()
export class ProfileService {
  
  constructor(private http: HttpClient) { }
  apiUrl = 'http://82.66.95.197:8080/api/';

  getUsers(){
    return this.http.get<UserDTO[]>(this.apiUrl+'users');
  }
}
