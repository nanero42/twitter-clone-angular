import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';
import { EPages } from 'src/providers/enums';

@Component({
  selector: 'app-settings-bar-item-right-molecula',
  templateUrl: './settings-bar-item-right-molecula.component.html',
  styleUrls: ['./settings-bar-item-right-molecula.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsBarItemRightMoleculaComponent {
  @Input() currentPath!: string;
  @Input() settingsTemplateRef!: TemplateRef<HTMLElement>;

  ePages = EPages;
}
