import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-messages-page',
  templateUrl: './messages-page.component.html',
  styleUrls: ['./messages-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesPageComponent {

}
