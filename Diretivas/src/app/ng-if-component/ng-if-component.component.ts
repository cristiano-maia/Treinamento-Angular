import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-if-component.component.html',
  styleUrl: './ng-if-component.component.css'
})
export class NgIfComponentComponent {

  // A diretiva ngIf é usada para mostrar ou esconder 
  // elementos no DOM com base em uma condição booleana.
  mostrarTexto: boolean = true;
  mensagens: string[] = [
    "Mensagem 1: Este é o primeiro texto!",
    "Mensagem 2: Aqui está o segundo texto!",
    "Mensagem 3: Mais uma mensagem interessante!"
  ];
  mensagemAtual: string = this.mensagens[0];
  contador: number = 0;

  alternarTexto() {
    this.mostrarTexto = !this.mostrarTexto;
  }

  proximaMensagem() {
    this.contador = (this.contador + 1) % this.mensagens.length;
    this.mensagemAtual = this.mensagens[this.contador];
  }
}
