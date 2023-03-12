import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EButton, EIcons } from 'src/app/enums';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() button = EButton.text;
  @Input() text = 'button';
  @Input() icon!: EIcons;
  @Input() iconWidth!: string;
  @Input() iconHeight!: string;

  get buttonCSSClasses() {
    return [
      `button_type-${this.button}`,
    ];
  }

  get isFloating() {
    return this.buttonCSSClasses.includes('button_type-floating');
  }
}
