import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-for-component.component.html',
  styleUrl: './ng-for-component.component.css'
})
export class NgForComponentComponent {
  // Array de itens que será iterado
  listaDeItens: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  // Adiciona um novo item à lista
  adicionarItem() {
    const novoItem = `Item ${this.listaDeItens.length + 1}`;
    this.listaDeItens.push(novoItem);
  }

  // Remove o último item da lista
  removerItem() {
    this.listaDeItens.pop();
  }
}
