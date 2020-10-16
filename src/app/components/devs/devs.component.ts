import { Component, OnInit } from '@angular/core';
import { Devs } from '../../interfaces/devs';
import { DevsService } from '../../services/devs.service';

@Component({
  selector: 'app-devs',
  templateUrl: './devs.component.html',
  styleUrls: ['./devs.component.css']
})
export class DevsComponent implements OnInit {
  devs: Devs;

  constructor(private devsService: DevsService) { }

  ngOnInit(): void {
    this.devsService.getDevInfo().subscribe(
      (data: Devs) => this.devs = data);
  }

}
