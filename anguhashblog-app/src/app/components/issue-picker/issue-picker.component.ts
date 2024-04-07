import { HttpClient } from "@angular/common/http";
import { Component, inject, OnInit } from "@angular/core";
import { AppFeature } from "../../models/app-feature";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ViewportScroller } from "@angular/common";

import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatIconModule } from "@angular/material/icon";

@Component({
	selector: "app-issue-picker",
	standalone: true,
	imports: [
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatCardModule,
		MatButtonModule,
    MatTooltipModule,
		MatIconModule,
	],
	templateUrl: "./issue-picker.component.html",
	styleUrl: "./issue-picker.component.scss",
})
export class IssuePickerComponent implements OnInit {
	appFeatures: AppFeature[] = [];
	filteredAppFeatures: AppFeature[] = [];
  private readonly scroller = inject(ViewportScroller);
	private http = inject(HttpClient);

	filterForm: FormGroup;

	constructor(private formBuilder: FormBuilder) {
		this.filterForm = this.formBuilder.group({
			filter: [""],
		});
	}

	ngOnInit(): void {
    this.scroller.scrollToPosition([0, 0]);
		this.http
			.get<AppFeature[]>("./assets/JSON/app-features.json")
			.subscribe((data) => {
				this.appFeatures = data;
				this.filteredAppFeatures = data;
			});
	}

	filterResults() {
		const text = this.filterForm.get("filter")?.value;
		if (!text) {
			this.filteredAppFeatures = this.appFeatures;
		}

		this.filteredAppFeatures = this.appFeatures.filter((feature) =>
			feature.name.toLowerCase().includes(text.toLowerCase())
		);
	}

	clearFilter() {
		this.filteredAppFeatures = [...this.appFeatures];
		this.filterForm.get("filter")?.setValue("");
	}
}
