import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacao-texto',
  standalone: true,
  imports: [],
  templateUrl: './interpolacao-texto.component.html',
  styleUrl: './interpolacao-texto.component.css'
})
export class InterpolacaoTextoComponent {

  // Variaveis
  preco: number = 150.75;
  desconto: number = 0.1;

  // Objeto aninhado (Produto)
  produto = {
    nome: 'Notebook Gamer',
    descricao: 'Notebook de alta performance com placa de vídeo dedicada.',
    estoque: 5,
    preco: this.preco,
    precoComDesconto: this.preco * (1 - this.desconto)
  }

  // Objeto (Usuário)
  usuario = {
    nome: 'Cristiano Maia',
    email: 'cristiano.maia@exemplo.com',
    endereco: {
      cidade: 'São Paulo',
      estado: 'SP'
    }
  };
  // Propriedade formatada para 2 casas decimais
  valorTotal: string = (this.produto.precoComDesconto * 3).toFixed(2);


}
