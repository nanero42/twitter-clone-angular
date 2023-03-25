import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { EIcons } from 'src/app/enums';
import { toggle } from 'src/store/sidebar/actions';

@Component({
  selector: 'app-menu-item-left',
  templateUrl: './menu-item-left.component.html',
  styleUrls: ['./menu-item-left.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuItemLeftComponent {
  @Output() toggle = new EventEmitter(false);

  eIcons = EIcons;

  constructor(
    private store: Store<{ sidebar: boolean }>
  ) {}

  onToggle() {
    this.store.dispatch(toggle());
  }
}
