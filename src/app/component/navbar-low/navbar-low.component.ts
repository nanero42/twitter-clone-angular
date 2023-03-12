import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EIcons } from 'src/app/enums';

@Component({
  selector: 'app-navbar-low',
  templateUrl: './navbar-low.component.html',
  styleUrls: ['./navbar-low.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarLowComponent {
  eIcon = EIcons;
}
