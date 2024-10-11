import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteDemoComponent } from './componente-demo.component';

describe('ComponenteDemoComponent', () => {
  let component: ComponenteDemoComponent;
  let fixture: ComponentFixture<ComponenteDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponenteDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
