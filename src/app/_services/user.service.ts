import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { News } from '../Models/News';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = `${environment.HOST}`;
  constructor(private http: HttpClient) { }

  register(user : User){
    return this.http.post(`${this.url}auth/signup`,user);
  }
 
}