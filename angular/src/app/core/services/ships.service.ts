import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  url: string = 'https://swapi.dev/api/starships/'
  headerDict = {
    'Authorization': 'none',
    'Access-Control-Allow-Origin': '*'
  }
  requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headerDict), 
  };
  
  constructor( private http: HttpClient ) {}

  getShipsByPage(page = 1): Observable<any> {
    let params = new HttpParams();

    if (page !== 1) {
      params = params.set('page', page.toString());
    }

    return this.http.get(this.url, { params }).pipe( take(1) );
  }

}
