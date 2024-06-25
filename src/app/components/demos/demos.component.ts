import { Component, OnInit, inject } from "@angular/core";
import { LiveSite } from "../../models/live-site";
import { ThemeService } from "../../services/theme.service";
import { HttpClient } from "@angular/common/http";
import { NgOptimizedImage } from "@angular/common";
import { DomSanitizer } from "@angular/platform-browser";

import { MatCardModule } from "@angular/material/card";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";

@Component({
	selector: "app-demos",
	standalone: true,
	imports: [NgOptimizedImage, MatCardModule, MatIconModule, MatTooltipModule],
	templateUrl: "./demos.component.html",
	styleUrl: "./demos.component.scss",
})
export class DemosComponent implements OnInit {
	themeService: ThemeService = inject(ThemeService);
	http: HttpClient = inject(HttpClient);

	liveSites: LiveSite[] = [];

	constructor(
		private iconRegistry: MatIconRegistry,
		private sanitizer: DomSanitizer
	) {
		this.iconRegistry.addSvgIcon(
			"github",
			this.sanitizer.bypassSecurityTrustResourceUrl("./assets/icons/github.svg")
		);
		this.iconRegistry.addSvgIcon(
			"angular",
			this.sanitizer.bypassSecurityTrustResourceUrl(
				"./assets/icons/angular-new.svg"
			)
		);
		this.iconRegistry.addSvgIcon(
			"analog",
			this.sanitizer.bypassSecurityTrustResourceUrl("./assets/icons/analog.svg")
		);
		this.iconRegistry.addSvgIcon(
			"material",
			this.sanitizer.bypassSecurityTrustResourceUrl(
				"./assets/icons/material.svg"
			)
		);
		this.iconRegistry.addSvgIcon(
			"primeng",
			this.sanitizer.bypassSecurityTrustResourceUrl(
				"./assets/icons/primeng.svg"
			)
		);
	}

	ngOnInit(): void {
		this.http
			.get<LiveSite[]>("../../assets/JSON/live-sites.json")
			.subscribe((data) => {
				this.liveSites = data;
			});
	}
}
