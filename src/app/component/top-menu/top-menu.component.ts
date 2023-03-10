import { Component } from '@angular/core';
import { EIcons } from 'src/app/enums';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent {
  eIcons = EIcons;
}
