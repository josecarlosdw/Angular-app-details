import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { MapsComponent } from './maps/maps.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
    data: { title: 'Lista de Estadios' }
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    data: { title: 'Estadio Detalhes' }
  },
  {
    path: 'maps/:lat/:lng',
    component: MapsComponent,
    data: { title: 'Estadio Posição' }
  },
  { path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }