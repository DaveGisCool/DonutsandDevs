import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-dev',
  templateUrl: './add-dev.component.html',
  styleUrls: ['./add-dev.component.css']
})
export class AddDevComponent implements OnInit {
  newDevName: string;
  newDevYear: string;
  newDevAccomplishment: string;

  constructor() { }

  ngOnInit(): void {
  }

}
