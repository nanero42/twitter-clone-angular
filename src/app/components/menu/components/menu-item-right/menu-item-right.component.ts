import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';
import { EPages } from 'src/app/enums';

@Component({
  selector: 'app-menu-item-right',
  templateUrl: './menu-item-right.component.html',
  styleUrls: ['./menu-item-right.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuItemRightComponent {
  @Input() currentPath!: string;
  @Input() settingsTemplateRef!: TemplateRef<HTMLElement>;

  ePages = EPages;
}
