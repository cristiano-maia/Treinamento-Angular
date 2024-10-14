import { Component } from '@angular/core';

@Component({
  selector: 'app-evento',
  standalone: true,
  imports: [],
  templateUrl: './evento.component.html',
  styleUrl: './evento.component.css'
})
export class EventoComponent {

  mensagemClique: string = '';
  mensagemTecla: string = '';
  valorInput: string = '';
  mensagemHover: string = '';
  focoCampo: string = '';
  rolarPagina: string = '';

  // Métodos dos eventos
  aoClicar() {
    this.mensagemClique = 'Botão clicado!';
  }

  aoPressionarTecla(evento: KeyboardEvent) {
    this.mensagemTecla = `Tecla pressionada: ${(evento.target as HTMLInputElement).value}`;
  }

  aoMudarValorInput(evento: Event) {
    this.valorInput = (evento.target as HTMLInputElement).value;
  }

  aoPassarMouse() {
    this.mensagemHover = 'Mouse passou sobre o texto!';
  }

  aoFocar() {
    this.focoCampo = 'Campo focado!';
  }

  aoPerderFoco() {
    this.focoCampo = 'Campo perdeu o foco!';
  }

  aoRolarPagina() {
    this.rolarPagina = 'Você rolou a página!';
  }
}

