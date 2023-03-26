import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EIcons } from 'src/app/enums';

@Component({
  selector: 'molecula-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountInfoComponent {
  eIcons = EIcons;
}
