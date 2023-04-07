import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EAccordionOpenStrategy } from 'src/providers/enums';

@Component({
  selector: 'app-accordion-molecula',
  templateUrl: './accordion-molecula.component.html',
  styleUrls: ['./accordion-molecula.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionMoleculaComponent {
  @Input() openStrategy = EAccordionOpenStrategy.many;
}
