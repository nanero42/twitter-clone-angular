import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EAccordionOpenStrategy, EIcons } from '../providers/enums';
import { IAccordionItem } from '../providers/interfaces';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  strategy = EAccordionOpenStrategy.one;
  eIcons = EIcons;

  accordionItems: IAccordionItem[] = [
    { id: 0, title: 'Creator Studio' },
    { id: 1, title: 'Professional Tools' },
    { id: 2, title: 'Settings and Support' },
  ];
}
