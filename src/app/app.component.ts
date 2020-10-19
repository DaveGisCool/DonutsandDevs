import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DonutsandDevs';
  showLoading = true;

  constructor(private router: Router) {
    this.router.events.subscribe(
      (loadingEvent: Event) => {
        if (loadingEvent instanceof NavigationStart) {
      this.showLoading = true;
    }
      if(loadingEvent instanceof NavigationEnd){
        this.showLoading = false;
      }
    });
  }
}
