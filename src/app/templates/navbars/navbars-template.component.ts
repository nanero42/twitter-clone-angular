import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IAccordionItem } from 'src/providers/interfaces';

@Component({
  selector: 'app-navbars-template',
  templateUrl: './navbars-template.component.html',
  styleUrls: ['./navbars-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarsTemplateComponent {
  @Input() accordionItems: IAccordionItem[] = [];
}
