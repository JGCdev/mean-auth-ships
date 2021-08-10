import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShipsComponent } from './ships.component';

import { BehaviorSubject } from 'rxjs';
import { ShipsService } from 'src/app/core/services/ships.service';
import { AppModule } from 'src/app/app.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ɵROUTER_PROVIDERS } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('ShipsComponent', () => {
  let component: ShipsComponent;
  let fixture: ComponentFixture<ShipsComponent>;
  const serviceMock ={
    getShips:function(){ return  new BehaviorSubject([])}
  }

  @Component({
    selector: 'ships-details',
    template: '<p>Mock Ship Details</p>'
  })
  class MockShipDetails {
    @Input() dataList:any;
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipsComponent,MockShipDetails ],
      imports: [AppModule, RouterTestingModule, HttpClientModule],
      providers:[
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
