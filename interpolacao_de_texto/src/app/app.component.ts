import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolacaoTextoComponent } from './interpolacao-texto/interpolacao-texto.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InterpolacaoTextoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'interpolacao_de_texto';
}
