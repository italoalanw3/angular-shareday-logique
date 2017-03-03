import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasDiretivasComponent } from './minhas-diretivas.component';

describe('MinhasDiretivasComponent', () => {
  let component: MinhasDiretivasComponent;
  let fixture: ComponentFixture<MinhasDiretivasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhasDiretivasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhasDiretivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
