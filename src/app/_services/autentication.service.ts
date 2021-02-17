import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { News } from '../Models/News';
import { Person } from '../Models/Person';
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {
  url: string = `${environment.HOST}auth`;
  constructor(private http: HttpClient,
              private cookies: CookieService) { }

  login(user : any): Observable<any>{
    return this.http.post(`${this.url}/login`,user);
  }

  setToken(token: any) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }

  getUser() {
    return this.http.get(`${this.url}/login`);
  }
  getUserLogged() {
    const token = this.getToken();
    // Aquí iría el endpoint para devolver el usuario para un token
  }
 
}