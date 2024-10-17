import { CommonModule } from '@angular/common';
import { Component, Pipe } from '@angular/core';
import { TruncatePipe } from './truncate.pipe';
import { MediaPipe } from "../pipe/media.pipe";

@Component({
  selector: 'app-exemplo-pipes',
  standalone: true,
  imports: [CommonModule, TruncatePipe, MediaPipe],
  templateUrl: './exemplo-pipes.component.html',
  styleUrl: './exemplo-pipes.component.css'
})
export class ExemploPipesComponent {
  nome: string = 'Cristiano';
  valor: number = 1234.56;
  porcentagem: number = 0.85;
  casasDecimais: number = 98765.4321;
  hoje: Date = new Date();
  texto: string = 'Este é um exemplo de texto que será truncado.';

  obj: any = { 'nome': 'Cristiano', 'email': 'cristiano@email.com' }

  // Vetor de objetos
  alunos: any = [
    { 'nome': 'Ana', 'nota1': 8, 'nota2': 9 },
    { 'nome': 'Julio', 'nota1': 7, 'nota2': 8 },
    { 'nome': 'Letícia', 'nota1': 3, 'nota2': 2 },
    { 'nome': 'Ricardo', 'nota1': 7, 'nota2': 7 }
  ];

}
