import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import {MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { PanelItem } from '../../models/panel-item';

@Component({
  selector: 'app-dos-donts',
  standalone: true,
  imports: [RouterLink, MatExpansionModule, MatIconModule],
  templateUrl: './dos-donts.component.html',
  styleUrl: './dos-donts.component.scss'
})
export class DosDontsComponent implements OnInit {
  dos: PanelItem[] = [];
  donts: PanelItem[] = [];
  http = inject(HttpClient);

  ngOnInit(): void {
    this.http.get<{ dos: PanelItem[], donts: PanelItem[] }>('../../assets/JSON/dos-donts.json').subscribe((data) => {
      this.dos = data.dos;
      this.donts = data.donts;
    });
  }

}
