import { Component, Input, OnInit } from '@angular/core';
import { DonutDetails } from '../../interfaces/donut-details';
import { Result } from '../../interfaces/donuts';
import { DataRequestService } from '../../services/data-request.service';

@Component({
  selector: 'app-donut-details',
  templateUrl: './donut-details.component.html',
  styleUrls: ['./donut-details.component.css']
})
export class DonutDetailsComponent implements OnInit {
  @Input() donut: Result;

  donutdetails: DonutDetails;

  constructor(private donutService:DataRequestService) { }

  ngOnInit(): void {
    this.donutService.getDonutDetails(this.donut.ref).subscribe(
      (data: DonutDetails) => this.donutdetails = data);
  }

}
