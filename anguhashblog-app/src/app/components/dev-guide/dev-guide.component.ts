import { ViewportScroller } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
	selector: "app-dev-guide",
	standalone: true,
	imports: [RouterLink],
	templateUrl: "./dev-guide.component.html",
	styleUrl: "./dev-guide.component.scss",
})
export class DevGuideComponent implements OnInit {
	private readonly scroller = inject(ViewportScroller);

	ngOnInit(): void {
		this.scroller.scrollToPosition([0, 0]);
	}
}
