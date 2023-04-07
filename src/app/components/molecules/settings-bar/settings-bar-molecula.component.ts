import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { EIcons, EPages } from 'src/providers/enums';
import { ITab } from 'src/providers/interfaces';
import { getFirstUrlStartingWithSlash } from 'src/providers/regexp';
import { toggle } from 'src/store/sidebar/actions';

@Component({
  selector: 'app-settings-bar-molecula',
  templateUrl: './settings-bar-molecula.component.html',
  styleUrls: ['./settings-bar-molecula.component.scss']
})
export class SettingsBarMoleculaComponent implements OnInit, OnDestroy {
  @Input() secondBarTabs!: ITab[];

  routerListener$ = this.router.events;

  eIcons = EIcons;
  ePages = EPages;

  currentPath = '';

  tab = {
    home: [
      { id: 0, value: 'For you', link: '/home' },
      { id: 1, value: 'Following', link: '/home/following' },
    ],
    notifications: [
      { id: 0, value: 'All', link: '/notifications' },
      { id: 1, value: 'Verified', link: '/notifications/verified' },
      { id: 2, value: 'Mentions', link: '/notifications/mentions' },
    ],
  };

  private _subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private store: Store<{ sidebar: boolean }>
  ) {}

  ngOnInit(): void {
    this._subscriptions.push(
      this.routerListener$.subscribe((v: any) => {
        const isNavigationEnd = v instanceof NavigationEnd;

        if (isNavigationEnd) {
          this.currentPath = getFirstUrlStartingWithSlash(v.urlAfterRedirects);
        }
      }),
    );
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach((s) => s.unsubscribe());
  }

  toggle() {
    this.store.dispatch(toggle());
  }
}
