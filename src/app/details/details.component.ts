import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estadio } from '../estadios';

import { EstadioService } from '../services/estadio.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

    public id: any;
    estadios: Estadio[];
    private sub: any;

    prodIdSnapshot: any;


  constructor(
    estadioService: EstadioService, 
    public route: ActivatedRoute, 
    public router: Router) {

      this.estadios = estadioService.obterEstadios();
    }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

      this.id = +params['id'];
  });
  }

  ngOnDestroy() {

    this.sub.unsubscribe();
}

  showMap(lat: any, lng: any) {
    this.router.navigate(['/maps', lat, lng]);
  }

}