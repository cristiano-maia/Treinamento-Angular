import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormReativoComponent } from "./form-reativo/form-reativo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormReativoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ReactiveForms';
}
