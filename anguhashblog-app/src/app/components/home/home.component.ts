import { Component, OnInit, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Goal } from "../../models/goal";
import { Feature } from "../../models/feature";
import { ThemeService } from "../../services/theme.service";
import { ViewportScroller } from "@angular/common";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit {
  videoVolume = 0;
  http: HttpClient = inject(HttpClient);
  themeService: ThemeService = inject(ThemeService);
  private readonly scroller = inject(ViewportScroller);

	goals: Goal[] = [];
	features: Feature[] = [];

  ngOnInit() :void {
    this.scroller.scrollToPosition([0, 0]);
    this.http.get<Goal[]>("../../assets/JSON/goals.json").subscribe((data) => {
      this.goals = data;
    });
    this.http.get<Feature[]>("../../assets/JSON/features.json").subscribe((data) => {
      this.features = data;
    });
  }
}
