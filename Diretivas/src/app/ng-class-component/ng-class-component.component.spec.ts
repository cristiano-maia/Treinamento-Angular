import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassComponentComponent } from './ng-class-component.component';

describe('NgClassComponentComponent', () => {
  let component: NgClassComponentComponent;
  let fixture: ComponentFixture<NgClassComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgClassComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgClassComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
