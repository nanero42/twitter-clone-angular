import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { EIcons } from 'src/providers/enums';
import { toggle } from 'src/store/sidebar/actions';

@Component({
  selector: 'molecula-settings-bar-item-left',
  templateUrl: './settings-bar-item-left.component.html',
  styleUrls: ['./settings-bar-item-left.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsBarItemLeftComponent {
  @Output() toggle = new EventEmitter(false);

  eIcons = EIcons;

  constructor(
    private store: Store<{ sidebar: boolean }>
  ) {}

  onToggle() {
    this.store.dispatch(toggle());
  }
}
