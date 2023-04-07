import { Component, Input } from '@angular/core';
import { EIcons } from 'src/providers/enums';

@Component({
  selector: 'app-icon-atom',
  templateUrl: './icon-atom.component.html',
  styleUrls: ['./icon-atom.component.scss']
})
export class IconAtomComponent {
  @Input() icon = EIcons.logo;
  @Input() fill = '#000';
  @Input() width = '22px';
  @Input() height = '22px';

  eIcons = EIcons;
}
