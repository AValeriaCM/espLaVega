import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })

  export class PqrService{

    url: string = `${environment.HOST}`;

    constructor(private http: HttpClient){ }

    pqr(pqr: any){
        return this.http.post(`${this.url}pqr`, pqr);
    }

  }