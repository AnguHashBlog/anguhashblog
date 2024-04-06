import { Component, inject, OnInit, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import {MatExpansionModule, MatExpansionPanel} from '@angular/material/expansion';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-contributing',
  standalone: true,
  imports: [RouterLink, MatExpansionModule],
  templateUrl: './contributing.component.html',
  styleUrl: './contributing.component.scss'
})
export class ContributingComponent implements OnInit, AfterViewInit {
  currentPanelId: string | null = null;
  private route = inject(ActivatedRoute);
  private readonly scroller = inject(ViewportScroller);

  @ViewChildren(MatExpansionPanel) panels!: QueryList<MatExpansionPanel>;

  ngOnInit(): void {
    this.scroller.scrollToPosition([0, 0]);
  }

  ngAfterViewInit(): void {
    this.route.fragment.subscribe((fragment: string | null) => {
      if (fragment) {
        this.scrollAndOpenPanel(fragment);
      }
    });
  }

  scrollAndOpenPanel(panelId: string) {
    this.currentPanelId = panelId;
    this.panels.forEach(panel => {
      panel.expanded = panelId === panel.id;
    });
    this.scroller.scrollToAnchor(panelId);
  }
}
