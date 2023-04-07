import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription, tap } from 'rxjs';
import { EIcons } from 'src/providers/enums';
import { IStore } from 'src/providers/interfaces';
import { toggle } from 'src/store/sidebar/actions';

@Component({
  selector: 'molecula-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountInfoComponent implements OnInit {
  eIcons = EIcons;

  sidebar$!: Observable<boolean>;

  constructor(
    private store: Store<{ sidebar: IStore['sidebar'] }>,
  ) {}

  ngOnInit(): void {
    this.sidebar$ = this.store.select('sidebar');
  }

  hideSidebar() {
    this.store.dispatch(toggle());
  }
}
