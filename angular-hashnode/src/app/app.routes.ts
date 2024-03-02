import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DemosComponent } from './components/demos/demos.component';
import { ContributeComponent } from './components/contribute/contribute.component';
import { ContactComponent } from './components/contact/contact.component';
import { UseComponent } from './components/use/use.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'demos', component: DemosComponent },
  { path: 'contribute', component: ContributeComponent },
  { path: 'use', component: UseComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full'},
];
