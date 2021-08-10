import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $: any;


@Component({
  selector: 'ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss']
})
export class ShipsDetailsComponent implements OnInit {

  @Input() dataList: any;
  @Output() pageChangedEmitter: EventEmitter<number> = new EventEmitter<number>();
  config: any;
  shipId: string = '';
  url: string = '';
  // Modal
  titleDetails: string = '';
  modelDetails: string = '';
  starship_class: string = '';

  constructor() { 
  }
  
  ngOnInit(): void {
      this.config = {
        itemsPerPage: 9,
        currentPage: 1,
        totalItems: this.dataList.length
      };
  }

  ngOnChanges() {
    if (this.dataList && this.config) {
      this.config.totalItems = this.dataList.count || 0;
    }
  }

  getStarshipId(url) {
    let urlWithoutSlash = url.split("/");
    this.shipId = urlWithoutSlash[urlWithoutSlash.length-2]

    return  `https://starwars-visualguide.com/assets/img/starships/${this.shipId}.jpg`
  }

  pageChanged(event){
    this.config.currentPage = event;
    this.pageChangedEmitter.emit(event);
  }

  openDetails(details) {
    $("#exampleModal").modal('show');
    this.titleDetails = details.name;
    this.modelDetails = details.model;
    this.starship_class = details.starship_class
  }

}
