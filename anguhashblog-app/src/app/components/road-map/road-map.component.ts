import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { App, AppFeature, FeatureByComponent } from '../../models/app-feature';

@Component({
  selector: 'app-road-map',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './road-map.component.html',
  styleUrl: './road-map.component.scss'
})
export class RoadMapComponent implements OnInit {
  featuresByComponent: FeatureByComponent[] = [];
  private http = inject(HttpClient);

  ngOnInit(): void {
    this.http.get<FeatureByComponent[]>('./assets/JSON/app-features.json').subscribe( data => {
      this.featuresByComponent = data;
    });
  }

  getAppStatus(feature: AppFeature, appName: string): string {
    const app = feature.app.find(app => app.name === appName);
    return app ? app.status : '';
  }
}
