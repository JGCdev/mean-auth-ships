import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ShipsDetailsComponent } from './ships/ships-details/ships-details.component';
import { ShipsComponent } from './ships/ships.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [ ShipsComponent, ShipsDetailsComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgxPaginationModule
  ]
})
export class MainModule { }
