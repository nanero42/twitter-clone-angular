import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-template',
  templateUrl: './home-template.component.html',
  styleUrls: ['./home-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeTemplateComponent {

}
