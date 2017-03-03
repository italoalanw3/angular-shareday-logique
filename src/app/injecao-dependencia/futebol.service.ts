import { Injectable, Inject } from '@angular/core';

import { MelhorTimeService } from './melhor-time.service';

@Injectable()
export class FutebolService {

  private melhorTime:string;

  constructor(private melhorTimeService: MelhorTimeService) {
    this.melhorTime = melhorTimeService.getNome();
   }

   getMelhorTime():string{
     return this.melhorTime;
   }
}