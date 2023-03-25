import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EPages } from 'src/app/enums';

@Component({
  selector: 'app-menu-item-center',
  templateUrl: './menu-item-center.component.html',
  styleUrls: ['./menu-item-center.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuItemCenterComponent {
  @Input() currentPath!: string;

  ePages = EPages;
}
