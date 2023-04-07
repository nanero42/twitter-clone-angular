import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EIcons } from 'src/providers/enums';
import { INavbarLowItem } from 'src/providers/interfaces';

@Component({
  selector: 'app-navbar-item-molecula',
  templateUrl: './navbar-item-molecula.component.html',
  styleUrls: ['./navbar-item-molecula.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarItemMoleculaComponent {
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
