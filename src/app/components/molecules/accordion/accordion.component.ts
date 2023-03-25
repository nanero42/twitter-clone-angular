import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EAccordionOpenStrategy } from 'src/app/enums';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent {
  @Input() openStrategy = EAccordionOpenStrategy.many;
}
