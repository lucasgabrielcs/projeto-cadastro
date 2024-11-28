import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './usuario.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  HttpClientModule],
  providers: [UsuarioService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'economia-projeto';
}
