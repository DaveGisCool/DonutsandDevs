import { Component, OnInit } from '@angular/core';
import { DonutDetails } from '../../interfaces/donut-details';
import { Result } from '../../interfaces/donuts';
import { Donuts } from '../../interfaces/donuts';
import { DataRequestService } from '../../services/data-request.service';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {
  donuts: Donuts;

  constructor(private donutService:DataRequestService) { }

  ngOnInit(): void {
    this.donutService.getDonuts().subscribe(
      (data:Donuts) => 
        this.donuts = data
    );
  }

}
