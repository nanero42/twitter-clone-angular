import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EIcons } from 'src/app/enums';
import { INavbarLowItem } from 'src/app/interfaces';

@Component({
  selector: 'app-navbar-low',
  templateUrl: './navbar-low.component.html',
  styleUrls: ['./navbar-low.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarLowComponent {
  private _activeElement!: number;

  eIcon = EIcons;
  items: INavbarLowItem[] = [
    { id: 0, icon: EIcons.home, iconActive: EIcons.homeActive, templateName: EIcons.home },
    { id: 1, icon: EIcons.search, iconActive: EIcons.searchActive },
    { id: 2, icon: EIcons.notification, iconActive: EIcons.notificationActive, templateName: EIcons.notification },
    { id: 3, icon: EIcons.message, iconActive: EIcons.messageActive },
  ];
  get activeElementId() { return this._activeElement }
  set activeElementId(id: number) { this._activeElement = id }
}
