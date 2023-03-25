import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';
import { EPages } from 'src/app/enums';

@Component({
  selector: 'app-settings-bar-item-right',
  templateUrl: './settings-bar-item-right.component.html',
  styleUrls: ['./settings-bar-item-right.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsBarItemRightComponent {
  @Input() currentPath!: string;
  @Input() settingsTemplateRef!: TemplateRef<HTMLElement>;

  ePages = EPages;
}
