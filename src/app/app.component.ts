import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  LOGIQUE:string = 'Logique';
  ASSUNTO:string = 'Angular';
  SHAREDAY:string = '#shareday';
  VERSAO:string = '1';

  

  getTitulo():string{
    return this.VERSAO + 'º '+this.SHAREDAY+' da '+this.LOGIQUE+' sobre '+this.ASSUNTO;
  }

  getConsultarCep(cep:number){
    //return this.http.get('http://api.postmon.com.br/v1/cep/59074590').map((response: Response) => response.json());
  }
}
