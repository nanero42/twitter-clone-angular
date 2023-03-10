import { Component, Input } from '@angular/core';
import { EIcons } from 'src/app/enums';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() icon = EIcons.logo;
  @Input() fill = '#000';
  @Input() width = '22px';
  @Input() height = '22px';

  eIcons = EIcons;
}
