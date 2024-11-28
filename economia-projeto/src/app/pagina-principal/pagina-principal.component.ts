import { Component, OnInit } from '@angular/core';
import { UsuarioService, Financas } from '../usuario.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagina-principal',
  imports: [CommonModule,ReactiveFormsModule ],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})

export class PaginaPrincipalComponent implements OnInit{
  financasData?: Financas;
  erro: any;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    const nome = localStorage.getItem('nome');
    const email = localStorage.getItem('email');

    if (nome && email) {
      this.usuarioService.obterFinancasPorUsuario(nome, email).subscribe(
        data => {
          this.financasData = data;
        },
        error => {
          console.error('Erro ao obter os dados das finanças:', error);
          this.erro = error;
        }
      );
    } else {
      console.error('Nome e email não encontrados no localStorage');
    }
  }
}
