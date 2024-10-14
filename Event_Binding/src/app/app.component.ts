import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventoComponent } from './evento/evento.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EventoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Event_Binding';
}
