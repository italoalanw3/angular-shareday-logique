import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjecaoDependenciaComponent } from './injecao-dependencia.component';

describe('InjecaoDependenciaComponent', () => {
  let component: InjecaoDependenciaComponent;
  let fixture: ComponentFixture<InjecaoDependenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjecaoDependenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjecaoDependenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
