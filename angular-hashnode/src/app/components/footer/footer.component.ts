import { Component } from '@angular/core';

import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  date = new Date().getFullYear();
  siteName = "HashnodeNG";
  estee = "Esther White {{ MonaCodeLisa }}";

}
