import { Injectable, Inject } from '@angular/core';

@Injectable()
export class FutebolService {

  private melhorTime: MelhorTime;

  constructor() {
    this.melhorTime = new MelhorTime();
   }

   getMelhorTime():string{
     return this.melhorTime.getNome();
   }
}

/**
 * Melhor time
 */
class MelhorTime {
  private nome:string='FC Barcelona';

  constructor(){
  }

  getNome(){
    return this.nome;
  }
}