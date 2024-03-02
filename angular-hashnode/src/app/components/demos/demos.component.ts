import { Component, OnInit, inject } from "@angular/core";

import { MatCardModule } from "@angular/material/card";
import { ThemeService } from "../../services/theme.service";
import { HttpClient } from "@angular/common/http";
import { LiveSite } from "../../models/live-site";

@Component({
	selector: "app-demos",
	standalone: true,
	imports: [MatCardModule],
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
