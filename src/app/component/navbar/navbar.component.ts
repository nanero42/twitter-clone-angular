import { Component, Input } from '@angular/core';
import { EButton, EIcons } from 'src/app/enums';
import { ITab } from 'src/app/interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() secondBarTabs!: ITab[];

  eIcons = EIcons;
  eButton = EButton;
}
