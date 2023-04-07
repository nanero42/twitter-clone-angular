import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EAccordionOpenStrategy } from 'src/providers/enums';

@Component({
  selector: 'molecula-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent {
  @Input() openStrategy = EAccordionOpenStrategy.many;
}
