import { Component, Input, OnInit } from '@angular/core';
import { Complete } from '../../interfaces/devs';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.css']
})
export class DevComponent implements OnInit {
  @Input() dev: Complete;

  //complete: Complete;

  constructor() { }

  ngOnInit(): void {
  }

}
