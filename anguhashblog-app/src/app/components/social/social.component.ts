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
    { url: "https://discord.com/invite/3bS3xpCj", icon: "discord" },
    { url: "https://hashnode.anguhashblog.com", icon: "hashnode" },
    { url: "https://www.youtube.com/@AnguHashBlog", icon: "youtube" },
    { url: "https://www.linkedin.com/company/anguhashblog/", icon: "linkedin" },
    { url: "https://twitter.com/monacodelisa", icon: "twitter" },
    { url: "https://www.instagram.com/monacodelisa_", icon: "instagram" },
  ];

  constructor (private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer)
  { iconRegistry.addSvgIcon('github', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/github.svg'));
  this.iconRegistry.addSvgIcon('linkedin', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/linkedin.svg'));
  this.iconRegistry.addSvgIcon('hashnode', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/hashnode.svg'));
  this.iconRegistry.addSvgIcon('youtube', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/youtube.svg'));
  this.iconRegistry.addSvgIcon('discord', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/discord.svg'));
  this.iconRegistry.addSvgIcon('twitter', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/twitter-new.svg'));
  this.iconRegistry.addSvgIcon('instagram', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/instagram.svg'));
  }
}
