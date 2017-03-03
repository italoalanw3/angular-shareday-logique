import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingEInterpolationComponent } from './binding-e-interpolation.component';

describe('BindingEInterpolationComponent', () => {
  let component: BindingEInterpolationComponent;
  let fixture: ComponentFixture<BindingEInterpolationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingEInterpolationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingEInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
