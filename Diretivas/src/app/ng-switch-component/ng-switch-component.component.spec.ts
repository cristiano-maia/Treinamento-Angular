import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchComponentComponent } from './ng-switch-component.component';

describe('NgSwitchComponentComponent', () => {
  let component: NgSwitchComponentComponent;
  let fixture: ComponentFixture<NgSwitchComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgSwitchComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgSwitchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
