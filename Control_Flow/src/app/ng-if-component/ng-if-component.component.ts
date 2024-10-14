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
  produtos = [
    { nome: 'Notebook', descricao: 'Notebook com 16GB RAM e 512GB SSD' },
    { nome: 'Smartphone', descricao: 'Smartphone com câmera de 12MP' },
    { nome: 'Tablet', descricao: 'Tablet com tela de 10 polegadas' }
  ];

  produtoSelecionado: any = null;

  selecionarProduto(produto: any) {
    this.produtoSelecionado = produto;
  }

  limparSelecao() {
    this.produtoSelecionado = null;
  }
}
