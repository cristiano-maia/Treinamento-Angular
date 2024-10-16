import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reativo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-reativo.component.html',
  styleUrl: './form-reativo.component.css'
})
export class FormReativoComponent {

  // Criamos um FormGroup que representa o formulário e contém dois campos: nome e email
  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),  // Nome é obrigatório e precisa ter pelo menos 3 caracteres

    email: new FormControl('', [Validators.required, Validators.email])  // E-mail é obrigatório e precisa ser válido
  });

  // Método que será chamado ao submeter o formulário
  onSubmit() {
    console.log(this.formulario.value);  // Exibe no console os dados inseridos no formulário
    alert(`Nome: ${this.formulario.value.nome}\nE-mail: ${this.formulario.value.email}`);
  }

  

}
