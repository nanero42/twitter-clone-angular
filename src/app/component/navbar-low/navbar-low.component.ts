import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EIcons, EPagesPaths } from 'src/app/enums';
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
    { id: 0, icon: EIcons.home, iconActive: EIcons.homeActive, path: EPagesPaths.home, templateName: EIcons.home },
    { id: 1, icon: EIcons.search, iconActive: EIcons.searchActive, path: EPagesPaths.search },
    { id: 2, icon: EIcons.notification, iconActive: EIcons.notificationActive, path: EPagesPaths.notifications, templateName: EIcons.notification },
    { id: 3, icon: EIcons.message, iconActive: EIcons.messageActive, path: EPagesPaths.messages },
  ];
  get activeElementId() { return this._activeElement }
  set activeElementId(id: number) { this._activeElement = id }
}
