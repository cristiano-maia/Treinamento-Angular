import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteDemoComponent } from "./componente-demo/componente-demo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponenteDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'criando-componente';
}
