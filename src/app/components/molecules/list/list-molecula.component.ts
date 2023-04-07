import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IListItem } from 'src/providers/interfaces';

@Component({
  selector: 'app-list-molecula',
  templateUrl: './list-molecula.component.html',
  styleUrls: ['./list-molecula.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListMoleculaComponent {
  @Input() items!: IListItem[];
  @Input() useEndLine = true;
}
