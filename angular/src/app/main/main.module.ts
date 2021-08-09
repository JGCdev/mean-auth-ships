import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageOneComponent } from './page-one/page-one.component';
import { ShipsDetailsComponent } from './ships/ships-details/ships-details.component';
import { ShipsComponent } from './ships/ships.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [ PageOneComponent, PageTwoComponent, ShipsComponent, ShipsDetailsComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgxPaginationModule
  ]
})
export class MainModule { }
