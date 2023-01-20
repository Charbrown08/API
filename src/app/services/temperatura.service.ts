import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const urlBase='https://api.openweathermap.org/data/2.5/weather';
const appId='1908266d687acdaed4dc94cedf59b7da';

@Injectable({
  providedIn: 'root'
})
export class TemperaturaService {

  constructor(private http:HttpClient) { }

  getEstadoTiempo(ciudad:String,codigo:String) {
    const url=`${ urlBase}?q=${ciudad},${codigo}&appid=${appId}`;
    return this.http.get(url);
  }

}
