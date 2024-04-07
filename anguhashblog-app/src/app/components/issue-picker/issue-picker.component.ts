import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { FeatureByComponent } from '../../models/app-feature';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-issue-picker',
  standalone: true,
  imports: [MatExpansionModule, MatIconModule],
  templateUrl: './issue-picker.component.html',
  styleUrl: './issue-picker.component.scss'
})
export class IssuePickerComponent implements OnInit {
  featuresByComponent: FeatureByComponent[] = [];
  private http = inject(HttpClient);

  ngOnInit(): void {
    this.http.get<FeatureByComponent[]>('./assets/JSON/app-features.json').subscribe( data => {
      this.featuresByComponent = data;
    });
  }
}
