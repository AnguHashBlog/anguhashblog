import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { FeatureByComponent } from '../../models/app-feature';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-road-map',
  standalone: true,
  imports: [MatExpansionModule, MatIconModule],
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
}
