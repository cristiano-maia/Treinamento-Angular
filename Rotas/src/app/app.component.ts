import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Pagina1Component } from "./paginas/pagina1/pagina1.component";
import { Componente17Component } from "./componente17/componente17.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Pagina1Component, RouterLink, Componente17Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Rotas';
}
