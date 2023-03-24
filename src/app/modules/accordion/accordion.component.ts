import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EAccordionOpenStrategy, EIcons } from 'src/app/enums';
import { IAccordionItem } from 'src/app/interfaces';
import { removeItem } from 'src/providers/utils';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent {
  eIcons = EIcons;
  openedItem: number[] = [];
  openStrategy = EAccordionOpenStrategy.many;

  items: IAccordionItem[] = [
    { id: 0, title: 'Creator Studio' },
    { id: 1, title: 'Professional Tools' },
    { id: 2, title: 'Settings and Support' },
  ]

  private _toggleMany(id: number) {
    this.openedItem.includes(id) ? removeItem(this.openedItem, id) : this.openedItem.push(id);
  }

  private _toggleOne(id: number) {
    this.openedItem.includes(id) ? removeItem(this.openedItem, id) : this.openedItem = [id];
  }

  toggle(id: number) {
    this.openStrategy === EAccordionOpenStrategy.many ? this._toggleMany(id) : this._toggleOne(id);
  }

  rotateIcon() {
    return 'rotate180';
  }
}
