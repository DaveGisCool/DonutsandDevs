import { Component, Input, OnInit } from '@angular/core';
import { DonutDetails } from '../../interfaces/donut-details';
import { DataRequestService } from '../../services/data-request.service';

@Component({
  selector: 'app-donut-details',
  templateUrl: './donut-details.component.html',
  styleUrls: ['./donut-details.component.css']
})
export class DonutDetailsComponent implements OnInit {
  @Input() donut: DonutDetails;

  constructor(private donutService:DataRequestService) { }

  ngOnInit(): void {
  }

}
