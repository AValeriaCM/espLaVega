import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })

  export class InvoiceService{

    url: string = `${environment.HOST}`;

    constructor(private http: HttpClient){ }

    invoice (code: any, date: any): Observable<any>{
        return this.http.get<any>(`${this.url}invoices/0?code=${code}&date=${date}`);
    }

  }