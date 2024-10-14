import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PropriedadeComponent } from './propriedade/propriedade.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PropriedadeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Property_Binding';
}
