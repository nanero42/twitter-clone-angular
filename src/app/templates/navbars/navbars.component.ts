import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IAccordionItem } from 'src/app/interfaces';

@Component({
  selector: 'template-navbars',
  templateUrl: './navbars.component.html',
  styleUrls: ['./navbars.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarsComponent {
  @Input() accordionItems: IAccordionItem[] = [];
}
