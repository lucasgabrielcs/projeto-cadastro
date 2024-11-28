import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiUrl = 'http://localhost:8000/dados'; // URL unificada do backend

  constructor(private http: HttpClient) {}

  // Busca todos os dados da API unificada
  getDados(): Observable<{ usuarios: any[]; financas: any[] }> {
    return this.http.get<{ usuarios: any[]; financas: any[] }>(this.apiUrl);
  }

  // Filtra apenas os usuários
  getUsuarios(): Observable<any[]> {
    return this.getDados().pipe(map((data) => data.usuarios));
  }

  // Filtra apenas as finanças
  getFinancas(): Observable<any[]> {
    return this.getDados().pipe(map((data) => data.financas));
  }
}
