import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonutsComponent } from './components/donuts/donuts.component';
import { DonutDetailsComponent } from './components/donut-details/donut-details.component';
import { HttpClientModule } from '@angular/common/http';
import { DevsComponent } from './components/devs/devs.component';
import { DevComponent } from './components/dev/dev.component';
import { AddDevComponent } from './components/add-dev/add-dev.component';

@NgModule({
  declarations: [
    AppComponent,
    DonutsComponent,
    DonutDetailsComponent,
    DevsComponent,
    DevComponent,
    AddDevComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
