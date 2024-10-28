import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-componente-tabela',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente-tabela.component.html',
  styleUrl: './componente-tabela.component.css'
})
export class ComponenteTabelaComponent {

@Input() vetor:string[] = [];


}
