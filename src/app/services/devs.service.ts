import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Devs } from '../interfaces/devs';

@Injectable({
  providedIn: 'root'
})
export class DevsService {

  constructor(private http: HttpClient) { }

  getDevInfo() {
    return this.http.get<Devs>("https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json");
  }
}
