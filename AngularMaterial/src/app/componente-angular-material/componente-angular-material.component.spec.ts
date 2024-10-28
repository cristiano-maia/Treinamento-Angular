import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteAngularMaterialComponent } from './componente-angular-material.component';

describe('ComponenteAngularMaterialComponent', () => {
  let component: ComponenteAngularMaterialComponent;
  let fixture: ComponentFixture<ComponenteAngularMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteAngularMaterialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponenteAngularMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
