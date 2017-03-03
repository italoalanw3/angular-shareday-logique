import { Component, OnInit } from '@angular/core';

import {FutebolService} from './futebol.service';

@Component({
  selector: 'injecao-dependencia',
  templateUrl: './injecao-dependencia.component.html',
  styleUrls: ['./injecao-dependencia.component.css'],
  providers: [FutebolService]
})
export class InjecaoDependenciaComponent implements OnInit {

  melhorTime:string;

  constructor(futebol:FutebolService) { 
    this.melhorTime = futebol.getMelhorTime();
  }

  ngOnInit() {
  }

}
