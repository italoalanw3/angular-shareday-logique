import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BuscadorCepService {

  constructor (
    private http: Http
  ) {}

  getCep(cep) {
    return this.http.get('http://api.postmon.com.br/v1/cep/'+cep)
    .map((res:Response) => res.json());
  }

}
