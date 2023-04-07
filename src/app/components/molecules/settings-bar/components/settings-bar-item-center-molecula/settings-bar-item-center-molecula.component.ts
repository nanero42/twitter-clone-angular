import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EPages } from 'src/providers/enums';

@Component({
  selector: 'app-settings-bar-item-center-molecula',
  templateUrl: './settings-bar-item-center-molecula.component.html',
  styleUrls: ['./settings-bar-item-center-molecula.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsBarItemCenterMoleculaComponent {
  @Input() currentPath!: string;

  ePages = EPages;
}
