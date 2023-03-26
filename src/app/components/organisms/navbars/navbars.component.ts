import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'organism-menu',
  templateUrl: './navbars.component.html',
  styleUrls: ['./navbars.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarsComponent {}
