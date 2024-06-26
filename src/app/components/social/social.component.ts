import { Component } from '@angular/core';
import { MatIcon, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-social',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './social.component.html',
  styleUrl: './social.component.scss'
})
export class SocialComponent {

  socialLinks = [
    { url: "https://github.com/anguhashblog", icon: "github" },
    { url: "https://discord.gg/SQCFCACz", icon: "discord" },
    { url: "https://hashnode.anguhashblog.com", icon: "hashnode" },
    { url: "https://www.youtube.com/@AnguHashBlog", icon: "youtube" },
    { url: "https://www.linkedin.com/company/anguhashblog/", icon: "linkedin" },
    { url: "https://twitter.com/monacodelisa", icon: "twitter" },
    { url: "https://www.instagram.com/monacodelisa_", icon: "instagram" },
  ];

  constructor (private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer)
  { iconRegistry.addSvgIcon('github', this.sanitizer.bypassSecurityTrustResourceUrl('/icons/github.svg'));
  this.iconRegistry.addSvgIcon('linkedin', this.sanitizer.bypassSecurityTrustResourceUrl('/icons/linkedin.svg'));
  this.iconRegistry.addSvgIcon('hashnode', this.sanitizer.bypassSecurityTrustResourceUrl('/icons/hashnode.svg'));
  this.iconRegistry.addSvgIcon('youtube', this.sanitizer.bypassSecurityTrustResourceUrl('/icons/youtube.svg'));
  this.iconRegistry.addSvgIcon('discord', this.sanitizer.bypassSecurityTrustResourceUrl('/icons/discord.svg'));
  this.iconRegistry.addSvgIcon('twitter', this.sanitizer.bypassSecurityTrustResourceUrl('/icons/twitter-new.svg'));
  this.iconRegistry.addSvgIcon('instagram', this.sanitizer.bypassSecurityTrustResourceUrl('/icons/instagram.svg'));
  }
}
