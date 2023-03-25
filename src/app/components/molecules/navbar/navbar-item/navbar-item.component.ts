import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EIcons } from 'src/app/enums';
import { INavbarLowItem } from 'src/app/interfaces';

@Component({
  selector: 'molecula-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarItemComponent {
  @Output() onActiveElementId = new EventEmitter(false);

  @Input() items!: INavbarLowItem[];
  @Input() notificationTemplateRef!: TemplateRef<HTMLElement>;
  @Input() homeTemplateRef!: TemplateRef<HTMLElement>;
  @Input() activeElementId = 0;

  eIcon = EIcons;

  setActiveElementId(id: number) {
    this.onActiveElementId.emit(id);
  }
}
