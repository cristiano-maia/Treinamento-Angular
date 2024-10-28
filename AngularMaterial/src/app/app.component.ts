import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteAngularMaterialComponent } from "./componente-angular-material/componente-angular-material.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponenteAngularMaterialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularMaterial';
}
