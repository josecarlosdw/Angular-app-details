import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { MapsComponent } from './maps/maps.component';

import { MatInputModule,} from '@angular/material/input';
import { MatPaginatorModule,} from '@angular/material/paginator';
import { MatProgressSpinnerModule,} from '@angular/material/progress-spinner';
import { MatSortModule,} from '@angular/material/sort';
import { MatIconModule,} from '@angular/material/icon';
import { MatButtonModule,} from '@angular/material/button';
import { MatCardModule,} from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { SelectedEstadioPipe } from './pipes/selected-estadio.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent,
    MapsComponent,
    SelectedEstadioPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }