import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:8000/dados'; 

   getDados(): Observable<{ usuarios: any[]; financas: any[] }> {
    return this.http.get<{ usuarios: any[]; financas: any[] }>(this.apiUrl);
  }


  getUsuarios(): Observable<any[]> {
    return this.getDados().pipe(map((data) => data.usuarios));
  }


  getFinancas(): Observable<any[]> {
    return this.getDados().pipe(map((data) => data.financas));
  }
}
