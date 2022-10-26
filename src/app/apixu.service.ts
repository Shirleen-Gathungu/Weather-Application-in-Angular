import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }
  getWeather(location:any){
    return this.http.get(
      'http://api.weatherstack.com/current?access_key=828cebb23e2acd88cdf720ab896eb92a&query=London,United Kingdom'
    );
}

}
