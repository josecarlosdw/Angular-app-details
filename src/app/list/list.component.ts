import { Component, OnInit } from '@angular/core';
import { Estadio } from '../estadios';

import { EstadioService } from '../services/estadio.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ EstadioService]
})
export class ListComponent{
  public id: any;

  estadios: Estadio[];

  constructor(estadioService: EstadioService) { 
    this.estadios = estadioService.obterEstadios();
   }

}
