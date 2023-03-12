import { Component, Input } from '@angular/core';
import { EButton, EIcons } from 'src/app/enums';
import { ITab } from 'src/app/interfaces';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent {
  @Input() secondBarTabs!: ITab[];

  eIcons = EIcons;
  eButton = EButton;
}
