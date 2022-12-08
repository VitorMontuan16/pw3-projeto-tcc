import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  servicosUrl = 'https://mewtwotcc.free.beeceptor.com/servicos';
  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.servicosUrl}`);
  }
}
