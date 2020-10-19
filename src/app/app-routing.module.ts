import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDevComponent } from './components/add-dev/add-dev.component';
import { DevsComponent } from './components/devs/devs.component';
import { DonutDetailsComponent } from './components/donut-details/donut-details.component';
import { DonutsComponent } from './components/donuts/donuts.component';

const routes: Routes = [
  {path: "Donuts", component: DonutsComponent },
  {path: "DonutDetails", component: DonutDetailsComponent },
  {path: "Devs", component: DevsComponent},
  {path: "AddDev", component: AddDevComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
