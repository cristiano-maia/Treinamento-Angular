import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfComponentComponent } from './ng-if-component.component';

describe('NgIfComponentComponent', () => {
  let component: NgIfComponentComponent;
  let fixture: ComponentFixture<NgIfComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgIfComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgIfComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
