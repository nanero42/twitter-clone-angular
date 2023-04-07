import { Component, OnDestroy, OnInit } from '@angular/core';
import { BasePageClass } from 'src/providers/classes/base-page.class';
import { EPageName } from 'src/providers/enums';
import { getFirstUrlStartingWithSlash } from 'src/providers/regexp';
import { CurrentPageService } from 'src/providers/services/current-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent extends BasePageClass implements OnInit, OnDestroy {
  pageName = EPageName.home;
  currentUrl = '';

  constructor(
    private currentPageService: CurrentPageService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.getCurrentUrl();

    this.currentPageService.currentPageName$.next(EPageName.home);
  }

  getCurrentUrl() {
    this.currentUrl = getFirstUrlStartingWithSlash(location.pathname);
  }
}
