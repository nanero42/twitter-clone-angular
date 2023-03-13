import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { EButton, EIcons, EPagesPaths } from 'src/app/enums';
import { ITab } from 'src/app/interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() secondBarTabs!: ITab[];

  eIcons = EIcons;
  eButton = EButton;

  currentPath = '';

  get isHomePage() { return !!this.currentPath.includes(EPagesPaths.home) }
  get isSearchPage() { return !!this.currentPath.includes(EPagesPaths.search) }
  get isNotificationsPage() { return !!this.currentPath.includes(EPagesPaths.notifications) }
  get isMessagesPage() { return !!this.currentPath.includes(EPagesPaths.messages) }

  constructor(private location: Location) {}

  ngOnInit(): void {
    this.location.onUrlChange((path: string) => this.currentPath = path);
  }
}
