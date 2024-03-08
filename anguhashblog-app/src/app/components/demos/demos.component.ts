import { Component, OnInit, inject } from "@angular/core";
import { LiveSite } from "../../models/live-site";
import { ThemeService } from "../../services/theme.service";
import { HttpClient } from "@angular/common/http";
import { NgOptimizedImage } from "@angular/common";

import { MatCardModule } from "@angular/material/card";

@Component({
	selector: "app-demos",
	standalone: true,
	imports: [NgOptimizedImage, MatCardModule],
	templateUrl: "./demos.component.html",
	styleUrl: "./demos.component.scss",
})
export class DemosComponent implements OnInit {
  themeService: ThemeService = inject(ThemeService);
  http: HttpClient = inject(HttpClient);

	liveSites: LiveSite[] = [];

  ngOnInit(): void {
    this.http.get<LiveSite[]>("../../assets/JSON/live-sites.json").subscribe(data => {
      this.liveSites = data;
    });
  }
}
