import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  palavra : string = 'logique sistemas';
  valor : number = 1817181718127;
  data : Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
