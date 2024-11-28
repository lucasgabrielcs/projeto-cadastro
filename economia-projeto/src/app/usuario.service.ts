import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Usuario {
  nome: string;
  email: string;
}

export interface Financas {
  usuario: Usuario;
  renda_mensal: number;
  despesas: number;
  lucro: number;
  objetivo: number;
  meses: number;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public apiUrl = 'http://127.0.0.1:8000/usuarios/'; 

  constructor(public http: HttpClient) { }

  
  obterFinancasPorUsuario(nome: string, email: string): Observable<Financas> {
    const params = new HttpParams()
      .set('nome', nome)
      .set('email', email);

    return this.http.get<Financas>(`${this.apiUrl}/financas/usuario/`, { params });
  }
}
