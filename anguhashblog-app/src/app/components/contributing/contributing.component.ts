import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import {MatExpansionModule} from '@angular/material/expansion';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-contributing',
  standalone: true,
  imports: [RouterLink, MatExpansionModule],
  templateUrl: './contributing.component.html',
  styleUrl: './contributing.component.scss'
})
export class ContributingComponent implements OnInit {
  private readonly scroller = inject(ViewportScroller);

  ngOnInit(): void {
    this.scroller.scrollToPosition([0, 0]);
  }
}
