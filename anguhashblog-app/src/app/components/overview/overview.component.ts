import { ViewportScroller } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
	selector: "app-overview",
	standalone: true,
	imports: [RouterLink],
	templateUrl: "./overview.component.html",
	styleUrl: "./overview.component.scss",
})
export class OverviewComponent implements OnInit {
	private readonly scroller = inject(ViewportScroller);

	ngOnInit(): void {
		this.scroller.scrollToPosition([0, 0]);
	}
}
