import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IListItem } from 'src/app/interfaces';

@Component({
  selector: 'molecula-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  @Input() items!: IListItem[];
  @Input() useEndLine = true;
}
