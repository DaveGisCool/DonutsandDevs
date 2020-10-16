import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonutDetailsComponent } from './components/donut-details/donut-details.component';
import { DonutsComponent } from './components/donuts/donuts.component';

const routes: Routes = [
  {path: "Donuts", component: DonutsComponent },
  {path: "DonutDetails", component: DonutDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
