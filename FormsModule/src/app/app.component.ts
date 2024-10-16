import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormCadastroComponent } from "./form-cadastro/form-cadastro.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormCadastroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FormsModule';
}
