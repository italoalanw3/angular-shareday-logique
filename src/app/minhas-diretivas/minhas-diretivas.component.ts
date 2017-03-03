import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'minhas-diretivas',
  templateUrl: './minhas-diretivas.component.html',
  styleUrls: ['./minhas-diretivas.component.css']
})
export class MinhasDiretivasComponent implements OnInit {

  isExibir: boolean = true;
  aplica: string;

  aplicacoes: Aplicacao[] = [];

  constructor() {
    this.carregarAplicacoes();
   }

  ngOnInit() {
  }

  carregarAplicacoes(){
    this.aplicacoes = [];
    this.aplicacoes.push({id: 1, nome: 'SGM'})
    this.aplicacoes.push({id: 2, nome: 'BrAlarmExpert'})
    this.aplicacoes.push({id: 3, nome: 'BrAlarmMonitor'})
  }

}

export class Aplicacao {
  id: number;
  nome: string;
}