import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolacaoTextoComponent } from './interpolacao-texto.component';

describe('InterpolacaoTextoComponent', () => {
  let component: InterpolacaoTextoComponent;
  let fixture: ComponentFixture<InterpolacaoTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterpolacaoTextoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterpolacaoTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
