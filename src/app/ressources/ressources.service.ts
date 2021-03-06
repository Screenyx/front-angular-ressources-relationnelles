import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RessourcesService {

  constructor(private http: HttpClient) { }
  apiUrl = 'http://82.66.95.197:8080/api/';

  getRessources(){
    return this.http.get<any>(this.apiUrl+'resources');
  }

}
