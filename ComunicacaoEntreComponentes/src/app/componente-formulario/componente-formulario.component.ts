import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './componente-formulario.component.html',
  styleUrl: './componente-formulario.component.css',
})
export class ComponenteFormularioComponent {

  // variavel para armazenar o nome informado
  nome: string = '';

  @Output() funcao = new EventEmitter<string>();


  // funcao de cadastro do componente de formulario
  cadastrarNome(){
    this.funcao.emit(this.nome);
  }
}
