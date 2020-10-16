import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Donuts } from '../interfaces/donuts'
import { DonutDetails } from '../interfaces/donut-details'

@Injectable({
  providedIn: 'root'
})
export class DataRequestService {

  constructor(private http:HttpClient) { }

  getDonuts(){
    return this.http.get<Donuts>('https://grandcircusco.github.io/demo-apis/donuts.json');
  }

  getDonutDetails(id: string){
    return this.http.get<DonutDetails>('https://grandcircusco.github.io/demo-apis/donuts/{{id}}.json');
  }
}

//https://grandcircusco.github.io/demo-apis/
//https://grandcircusco.github.io/demo-apis/donuts.json
//https://grandcircusco.github.io/demo-apis/donuts/INSERT_ID_HERE.json
//https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json