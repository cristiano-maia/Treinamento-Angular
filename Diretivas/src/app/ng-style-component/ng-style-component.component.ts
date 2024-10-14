import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-style-component.component.html',
  styleUrl: './ng-style-component.component.css'
})
export class NgStyleComponentComponent {
  corTexto: string = 'black';
  tamanhoFonte: number = 16;
  corFundo: string = 'lightgray';

  // Método para alterar a cor do texto manualmente
  alterarCorTexto(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.corTexto = inputElement.value;
  }

  aumentarFonte() {
    this.tamanhoFonte += 2;
  }

  diminuirFonte() {
    if (this.tamanhoFonte > 10) {
      this.tamanhoFonte -= 2;
    }
  }

  // Método para alterar a cor de fundo manualmente
  alterarCorFundo(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.corFundo = inputElement.value;
  }
}
