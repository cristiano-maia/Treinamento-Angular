import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';


@Component({
  selector: 'app-componente-angular-material',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './componente-angular-material.component.html',
  styleUrl: './componente-angular-material.component.css'
})
export class ComponenteAngularMaterialComponent {

}
