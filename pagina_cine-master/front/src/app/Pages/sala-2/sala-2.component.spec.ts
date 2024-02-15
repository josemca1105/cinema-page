import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sala2Component } from './sala-2.component';

describe('Sala2Component', () => {
  let component: Sala2Component;
  let fixture: ComponentFixture<Sala2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sala2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sala2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
