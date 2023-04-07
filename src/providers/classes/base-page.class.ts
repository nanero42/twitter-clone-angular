import { Injectable, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { EPageName } from "../enums";

@Injectable({
  providedIn: 'root',
})
export abstract class BasePageClass implements OnDestroy {
  abstract pageName: EPageName;

  subscriptions: Subscription[] = [];

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
