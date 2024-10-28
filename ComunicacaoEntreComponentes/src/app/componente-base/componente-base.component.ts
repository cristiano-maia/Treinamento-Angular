import { Component } from '@angular/core';
import { ComponenteFormularioComponent } from "../componente-formulario/componente-formulario.component";
import { ComponenteTabelaComponent } from "../componente-tabela/componente-tabela.component";

@Component({
  selector: 'app-componente-base',
  standalone: true,
  imports: [ComponenteFormularioComponent, ComponenteTabelaComponent],
  templateUrl: './componente-base.component.html',
  styleUrl: './componente-base.component.css'
})
export class ComponenteBaseComponent {

  // Vetor
  nomes:string[] = ['Cristiano','Amanda','Davi','Noah'];


  // funcao de cadastro
  cadastrar(nome:string){
    this.nomes.push(nome)
   
  }

}
