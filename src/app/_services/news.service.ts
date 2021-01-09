import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { News } from '../Models/News';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  url: string = `${environment.HOST}news`;
  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any>(`${this.url}`);
  }

}