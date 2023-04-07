import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EPages } from 'src/providers/enums';

@Component({
  selector: 'molecula-settings-bar-item-center',
  templateUrl: './settings-bar-item-center.component.html',
  styleUrls: ['./settings-bar-item-center.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsBarItemCenterComponent {
  @Input() currentPath!: string;

  ePages = EPages;
}
