import { Injectable } from '@angular/core';

import { ESTADIOS } from '../estadios';

@Injectable({
  providedIn: 'root'
})
export class EstadioService {

  constructor() { }

  obterEstadios() {
    return ESTADIOS;
  }
}
