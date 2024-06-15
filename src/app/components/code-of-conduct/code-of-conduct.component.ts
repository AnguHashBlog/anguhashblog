import { ViewportScroller } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-of-conduct',
  standalone: true,
  imports: [],
  templateUrl: './code-of-conduct.component.html',
  styleUrl: './code-of-conduct.component.scss'
})
export class CodeOfConductComponent implements OnInit {
  private readonly scroller = inject(ViewportScroller);

  goodBehavior = [
    "Demonstrating empathy and kindness toward other people",
    "Being respectful of differing opinions, viewpoints, and experiences",
    "Giving and gracefully accepting constructive feedback",
    "Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience",
    "Focusing on what is best not just for us as individuals, but for the overall community"
  ]

  badBehavior = [
    "The use of sexualized language or imagery, and sexual attention or advances of any kind",
    "Trolling, insulting or derogatory comments, and personal or political attacks",
    "Public or private harassment",
    "Publishing others' private information, such as a physical or email address, without their explicit permission",
    "Other conduct which could reasonably be considered inappropriate in a professional setting"
  ]

  ngOnInit(): void {
    this.scroller.scrollToPosition([0, 0]);
  }
}
