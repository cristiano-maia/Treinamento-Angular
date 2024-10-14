import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIfComponentComponent } from "./ng-if-component/ng-if-component.component";
import { NgForComponentComponent } from "./ng-for-component/ng-for-component.component";
import { NgSwitchComponentComponent } from "./ng-switch-component/ng-switch-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIfComponentComponent, NgForComponentComponent, NgSwitchComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Control_Flow';

  
}
