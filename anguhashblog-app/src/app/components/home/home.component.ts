import { Component, OnInit, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Goal } from "../../models/goal";
import { Feature } from "../../models/feature";
import { ThemeService } from "../../services/theme.service";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit {
  videoVolume = 0;
  themeService: ThemeService = inject(ThemeService);
  http: HttpClient = inject(HttpClient);

	goals: Goal[] = [];
	features: Feature[] = [];

  ngOnInit() :void {
    this.http.get<Goal[]>("../../assets/JSON/goals.json").subscribe((data) => {
      this.goals = data;
    });
    this.http.get<Feature[]>("../../assets/JSON/features.json").subscribe((data) => {
      this.features = data;
    });
  }
}
