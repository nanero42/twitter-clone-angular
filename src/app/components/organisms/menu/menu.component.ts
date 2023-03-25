import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IAccordionItem } from 'src/app/interfaces';

@Component({
  selector: 'organism-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
  @Input() accordionItems!: IAccordionItem[];
}
