import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DemosComponent } from './components/demos/demos.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ContributingComponent } from './components/contributing/contributing.component';
import { CodeOfConductComponent } from './components/code-of-conduct/code-of-conduct.component';
import { ContactComponent } from './components/contact/contact.component';
import { UseComponent } from './components/use/use.component';
import { IssueTrackerComponent } from './components/issue-tracker/issue-tracker.component';
import { DosDontsComponent } from './components/dos-donts/dos-donts.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'demos', component: DemosComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'contributing', component: ContributingComponent },
  { path: 'dos-donts', component: DosDontsComponent },
  { path: 'issue-tracker', component: IssueTrackerComponent },
  { path: 'code-of-conduct', component: CodeOfConductComponent },
  { path: 'use', component: UseComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full'},
];
