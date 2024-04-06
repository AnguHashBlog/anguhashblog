import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DemosComponent } from './components/demos/demos.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ContributingComponent } from './components/contributing/contributing.component';
import { CodeOfConductComponent } from './components/code-of-conduct/code-of-conduct.component';
import { ContactComponent } from './components/contact/contact.component';
import { UseComponent } from './components/use/use.component';
import { RoadMapComponent } from './components/road-map/road-map.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'demos', component: DemosComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'road-map', component: RoadMapComponent },
  { path: 'contributing', component: ContributingComponent },
  { path: 'code-of-conduct', component: CodeOfConductComponent },
  { path: 'use', component: UseComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full'},
];
