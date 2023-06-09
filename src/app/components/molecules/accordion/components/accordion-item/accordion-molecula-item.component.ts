import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EAccordionOpenStrategy, EIcons } from 'src/providers/enums';
import { removeItem } from 'src/providers/utils';

@Component({
  selector: 'app-accordion-molecula-item',
  templateUrl: './accordion-molecula-item.component.html',
  styleUrls: ['./accordion-molecula-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionMoleculaItemComponent {
  @Input() id!: number;
  @Input() title = '';
  @Input() icon = EIcons.arrowDown;
  @Input() openStrategy = EAccordionOpenStrategy.many;
  @Input() openedItem: number[] = [];

  eIcons = EIcons;

  constructor() {}

  private _toggleMany(id: number) {
    this.openedItem.includes(id) ? removeItem(this.openedItem, id) : this.openedItem.push(id);
  }

  private _toggleOne(id: number) {
    this.openedItem.includes(id) ? removeItem(this.openedItem, id) : this.openedItem = [id];
  }

  toggle(id: number) {
    this.openStrategy === EAccordionOpenStrategy.many ? this._toggleMany(id) : this._toggleOne(id);
  }

  rotateIcon() { return 'r180'; }
}
