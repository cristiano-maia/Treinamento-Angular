import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClassComponentComponent } from "./ng-class-component/ng-class-component.component";
import { NgForComponentComponent } from "./ng-for-component/ng-for-component.component";
import { NgIfComponentComponent } from "./ng-if-component/ng-if-component.component";
import { NgSwitchComponentComponent } from "./ng-switch-component/ng-switch-component.component";
import { NgStyleComponentComponent } from "./ng-style-component/ng-style-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClassComponentComponent, NgForComponentComponent, NgIfComponentComponent, NgSwitchComponentComponent, NgStyleComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Diretivas';
}
