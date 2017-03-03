import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'binding-e-interpolation',
  templateUrl: './binding-e-interpolation.component.html',
  styleUrls: ['./binding-e-interpolation.component.css']
})
export class BindingEInterpolationComponent implements OnInit {

  binding_e_interpolation: string = 'binding-e-interpolation';
  warning: boolean = false;
  nossaSala: string = 'assets/sala_de_desenvolvimento.jpg';

  constructor() { }

  ngOnInit() {
  }

  setWarning(){
    this.warning = !this.warning;
  }

}
