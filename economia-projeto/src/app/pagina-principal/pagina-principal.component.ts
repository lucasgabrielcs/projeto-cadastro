import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { UsuarioService } from '../usuario.service';
@Component({
  selector: 'app-pagina-principal',
  standalone: true,
  imports: [NgIf],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent implements OnInit{
  financa: any | null = null;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarioService.getFinancas().subscribe(
      (financas) => {
        const indexAleatorio = Math.floor(Math.random() * financas.length);
        this.financa = financas[indexAleatorio]; // Seleciona uma finança aleatória
      },
      (error) => {
        console.error('Erro ao buscar finanças:', error);
      }
    );
  }
}
