import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

export const routes: Routes = [
    {
      path: '',
      component: FormularioComponent
    },
    {
        path: 'pagina-principal', 
      component:PaginaPrincipalComponent  
    }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }