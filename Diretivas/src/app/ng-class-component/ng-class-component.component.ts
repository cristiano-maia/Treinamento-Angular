import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-class-component.component.html',
  styleUrl: './ng-class-component.component.css'
})
export class NgClassComponentComponent {
  // Variáveis para controlar as classes
  isActive: boolean = true;
  isHighlighted: boolean = false;

  // Método para alternar o estado das classes
  alternarAtivo() {
    this.isActive = !this.isActive;
  }

  alternarDestaque() {
    this.isHighlighted = !this.isHighlighted;
  }

}
