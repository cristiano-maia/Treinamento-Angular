import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteTabelaComponent } from './componente-tabela.component';

describe('ComponenteTabelaComponent', () => {
  let component: ComponenteTabelaComponent;
  let fixture: ComponentFixture<ComponenteTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteTabelaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponenteTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
