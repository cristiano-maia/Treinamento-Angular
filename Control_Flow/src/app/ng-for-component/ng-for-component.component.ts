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
  tarefas: string[] = ['Estudar Angular', 'Fazer exercícios', 'Ler um livro'];
  novaTarefa: string = '';

  // Método para adicionar uma nova tarefa
  adicionarTarefa() {
    if (this.novaTarefa.trim() !== '') {
      this.tarefas.push(this.novaTarefa);
      this.novaTarefa = '';
    }
  }

  // Método para capturar o valor do input diretamente
  atualizarTarefa(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.novaTarefa = inputElement.value;
  }

  removerTarefa(indice: number) {
    this.tarefas.splice(indice, 1);
  }
}
