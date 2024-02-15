import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sala3Component } from './sala-3.component';

describe('Sala3Component', () => {
  let component: Sala3Component;
  let fixture: ComponentFixture<Sala3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sala3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sala3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
