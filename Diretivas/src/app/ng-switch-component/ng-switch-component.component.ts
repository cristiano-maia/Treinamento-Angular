import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-switch-component.component.html',
  styleUrl: './ng-switch-component.component.css'
})
export class NgSwitchComponentComponent {
  // Variável de controle para a escolha
  corEscolhida: string = 'vermelho';

  // Método para alterar a cor escolhida
  alterarCor(novaCor: string) {
    this.corEscolhida = novaCor;
  }

}
