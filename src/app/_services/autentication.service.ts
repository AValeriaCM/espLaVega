import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { News } from '../Models/News';
import { Person } from '../Models/Person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {
  url: string = `${environment.HOST}auth`;
  constructor(private http: HttpClient) { }

  login(user : any): Observable<any>{
    return this.http.post(`${this.url}/login`,user);
  }

  getInfo(user : any): Observable<any>{
    return this.http.get(`${this.url}/login`);
  }
 
}