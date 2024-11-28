import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-formulario',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit{
  userForm!: FormGroup;

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const formValues = this.userForm.value;
      
      localStorage.setItem('nome', formValues.nome);
      localStorage.setItem('email', formValues.email);

      
      this.router.navigate(['/pagina-principal']);
    } else {
      this.markFormGroupTouched(this.userForm);
      console.log('Formulário inválido');
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
