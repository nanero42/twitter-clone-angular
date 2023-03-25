import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { EIcons, EPages } from 'src/app/enums';
import { ITab } from 'src/app/interfaces';
import { getFirstUrlStartingWithSlash } from 'src/providers/regexp';
import { toggle } from 'src/store/sidebar/actions';

@Component({
  selector: 'molecula-settings-bar',
  templateUrl: './settings-bar.component.html',
  styleUrls: ['./settings-bar.component.scss']
})
export class SettingsBarComponent implements OnInit, OnDestroy {
  @Input() secondBarTabs!: ITab[];

  routerListener$ = this.router.events;

  eIcons = EIcons;
  ePages = EPages;

  currentPath = '';

  tab = {
    home: [
      { id: 0, value: 'For you' },
      { id: 1, value: 'Following' },
    ],
    notifications: [
      { id: 0, value: 'All' },
      { id: 1, value: 'Verified' },
      { id: 2, value: 'Mentions' },
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
