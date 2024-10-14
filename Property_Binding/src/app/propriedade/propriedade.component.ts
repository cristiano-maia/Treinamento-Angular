import { Component } from '@angular/core';

@Component({
  selector: 'app-propriedade',
  standalone: true,
  imports: [],
  templateUrl: './propriedade.component.html',
  styleUrl: './propriedade.component.css'
})
export class PropriedadeComponent {
  imagemUrl: string = 'https://angular.io/assets/images/logos/angular/angular.png';
  larguraImagem: number = 200;
  botaoDesabilitado: boolean = true;

  // Método para atualizar a largura da imagem
  alterarLarguraImagem(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.larguraImagem = +inputElement.value;
  }

  // Método simples para alternar o estado do botão
  toggleBotao() {
    this.botaoDesabilitado = !this.botaoDesabilitado;
  }

  clicar(){
    alert('Você clicou no botão!')
  }
}