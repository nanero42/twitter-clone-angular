import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription, tap } from 'rxjs';
import { EIcons } from 'src/app/enums';
import { IStore } from 'src/app/interfaces';
import { toggle } from 'src/store/sidebar/actions';

@Component({
  selector: 'molecula-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountInfoComponent implements OnInit {
  eIcons = EIcons;
  subscriptions: Subscription[] = [];

  sidebar$!: Observable<boolean>;

  constructor(
    private store: Store<{ sidebar: IStore['sidebar'] }>,
  ) {}

  ngOnInit(): void {
    this.sidebar$ = this.store.select('sidebar');

    this.subscriptions.push(
      this.sidebar$.pipe(
        tap((value) => console.log(value)),
      ).subscribe(),
    );
  }

  hideSidebar() {
    this.store.dispatch(toggle());
  }
}
