import { Injectable } from '@angular/core';

@Injectable()
export class MelhorTimeService {

  private nome:string='FC Barcelona';

  getNome(){
    return this.nome;
  }

}
