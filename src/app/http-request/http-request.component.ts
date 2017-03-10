import { Component, OnInit } from '@angular/core';

import {BuscadorCepService} from './buscador-cep.service';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.css'],
  providers: [BuscadorCepService]
})
export class HttpRequestComponent implements OnInit {

  cepInformado:string;gi
  localizacao:any;
  constructor(private buscadorCepService: BuscadorCepService) { 
    buscadorCepService.getCep('59076310').subscribe(data => this.localizacao = data);;
    console.log('localizacao', this.localizacao);
  }

  ngOnInit() {
  }

  buscarCep(){
    this.buscadorCepService.getCep(this.cepInformado).subscribe(data => this.localizacao = data);;
  }

}
