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
  perguntaAtual: number = 1;
  respostaEscolhida: string = '';
  feedback: string = '';

  perguntas = [
    { 
      pergunta: 'Qual é a capital da França?', 
      opcoes: ['Berlim', 'Madri', 'Paris', 'Roma'], 
      respostaCorreta: 'Paris' 
    },
    { 
      pergunta: 'Qual é o maior planeta do sistema solar?', 
      opcoes: ['Marte', 'Terra', 'Júpiter', 'Saturno'], 
      respostaCorreta: 'Júpiter' 
    },
    { 
      pergunta: 'Quem escreveu "Dom Quixote"?', 
      opcoes: ['William Shakespeare', 'Miguel de Cervantes', 'Victor Hugo', 'Leon Tolstói'], 
      respostaCorreta: 'Miguel de Cervantes' 
    }
  ];

  // Método para alterar a pergunta atual
  alterarPergunta(numeroPergunta: number) {
    this.perguntaAtual = numeroPergunta;
    this.respostaEscolhida = '';
    this.feedback = '';
  }

  // Método para verificar se a resposta está correta
  verificarResposta(resposta: string) {
    const pergunta = this.perguntas[this.perguntaAtual - 1];
    this.respostaEscolhida = resposta;
    this.feedback = resposta === pergunta.respostaCorreta ? 'Correto!' : 'Errado!';
  }
}
