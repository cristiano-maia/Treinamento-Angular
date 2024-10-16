import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-cadastro.component.html',
  styleUrl: './form-cadastro.component.css'
})
export class FormCadastroComponent {

  // Variaveis
  nome: string = '';  
  email: string = '';

  // Método que é chamado ao submeter o formulário
  enviarFormulario() {
    
  // Exibe os valores de 'nome' e 'email' no console
  console.log(`Nome: ${this.nome}, Email: ${this.email}`);

  // Mostra uma mensagem de alerta com os valores inseridos
  alert(`Formulário enviado!\nNome: ${this.nome}\nEmail: ${this.email}`);
  }

}
