import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { EIcons, EPages } from 'src/app/enums';
import { ITab } from 'src/app/interfaces';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { getFirstUrlStartingWithSlash } from 'src/providers/regexp';
import { Store } from '@ngrx/store';
import { toggle } from 'src/store/sidebar/actions';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
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
          this.currentPath = getFirstUrlStartingWithSlash(v.url);
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
