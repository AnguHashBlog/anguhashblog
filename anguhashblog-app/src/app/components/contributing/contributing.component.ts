import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-contributing',
  standalone: true,
  imports: [RouterLink, MatExpansionModule],
  templateUrl: './contributing.component.html',
  styleUrl: './contributing.component.scss'
})
export class ContributingComponent {

}
