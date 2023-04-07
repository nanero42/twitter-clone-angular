import { Location } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EIcons, EPages } from 'src/providers/enums';
import { INavbarLowItem } from 'src/providers/interfaces';

@Component({
  selector: 'app-navbar-molecula',
  templateUrl: './navbar-molecula.component.html',
  styleUrls: ['./navbar-molecula.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarMoleculaComponent implements OnInit {
  activeElementId$ = new BehaviorSubject(0);

  eIcon = EIcons;
  items: INavbarLowItem[] = [
    { id: 0, icon: EIcons.home, iconActive: EIcons.homeActive, path: EPages.home, templateName: EIcons.home },
    { id: 1, icon: EIcons.search, iconActive: EIcons.searchActive, path: EPages.search },
    { id: 2, icon: EIcons.notification, iconActive: EIcons.notificationActive, path: EPages.notifications, templateName: EIcons.notification },
    { id: 3, icon: EIcons.message, iconActive: EIcons.messageActive, path: EPages.messages },
  ];

  constructor(
    private location: Location,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.location.onUrlChange((path: string) => this._trackActiveElementIdChanges(path));
  }

  private _trackActiveElementIdChanges(path: string): void {
    this.activeElementId$.next(this.items.find((item) => path.includes(item.path))?.id || 0);
  }

  onActiveElementId(id: number) {
    this.activeElementId$.next(id);
  }
}
