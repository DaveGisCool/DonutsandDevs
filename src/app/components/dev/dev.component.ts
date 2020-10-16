import { Component, Input, OnInit } from '@angular/core';
import { Devs, Complete } from '../../interfaces/devs';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.css']
})
export class DevComponent implements OnInit {
  @Input() devs: Devs;
  complete: Complete;

  constructor() { }

  ngOnInit(): void {
  }

}
