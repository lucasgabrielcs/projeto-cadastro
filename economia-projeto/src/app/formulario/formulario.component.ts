import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  nome: string = '';
  email: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  verificarUsuario() {
    this.usuarioService.getUsuarios().subscribe(
      (usuarios) => {
        const usuarioValido = usuarios.some(
          (usuario) => usuario.nome === this.nome && usuario.email === this.email
        );
        if (usuarioValido) {
          this.router.navigate(['/pagina-principal']);
        } else {
          alert('Usuário não encontrado.');
        }
      },
      (error) => {
        console.error('Erro ao buscar usuários:', error);
      }
    );
  }
}
