import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

    baseUrl: string = "http://api.wunderground.com/api/d0611deff59fd4cf/conditions/q/";

  constructor(public http: HttpClient) {
  }

  conditions(location) {
    return this.http.get(this.baseUrl+location.state+'/'+location.city+'.json');
  }

}
