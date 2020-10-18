import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonutDetails } from '../../interfaces/donut-details';
import { Donuts } from '../../interfaces/donuts';
import { DataRequestService } from '../../services/data-request.service';

@Component({
  selector: 'app-donut-details',
  templateUrl: './donut-details.component.html',
  styleUrls: ['./donut-details.component.css']
})
export class DonutDetailsComponent implements OnInit {
  donutdetails: DonutDetails;
  donuts: Donuts;

  constructor(private route: ActivatedRoute, private donutService:DataRequestService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (data: DonutDetails) => this.donutdetails = data);
    this.donutService.getDonutDetails(this.donutdetails.ref).subscribe(
      (data: DonutDetails) => this.donutdetails = data);
  }
}