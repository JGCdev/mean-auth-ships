import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { ShipsService } from 'src/app/core/services/ships.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  public dataList: any = [];

  constructor( private shipsService: ShipsService) {}

  ngOnInit(): void {
    this.shipsService.getShipsByPage().subscribe((ships) => {
      this.dataList = ships;
      console.log('SHIPS -->', this.dataList.results)
    })
  }

  getShipsPage(page = 1) {
    this.shipsService.getShipsByPage(page)
      .pipe(
        take(1)
      )
      .subscribe((dataListNew) => {
        this.dataList = dataListNew;
      });
  }
}
