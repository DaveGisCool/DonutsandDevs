import { Component, OnInit } from '@angular/core';
import { DonutDetails } from '../../interfaces/donut-details';
import { DataRequestService } from '../../services/data-request.service';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {
  donutdetails: DonutDetails;

  constructor(private donutService:DataRequestService) { }

  ngOnInit(): void {
    this.donutService.getDonutDetails(x).subscribe(
      (data:DonutDetails) => this.donutdetails = data
    )
  }

}
