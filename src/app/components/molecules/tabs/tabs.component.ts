import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ITab } from 'src/app/interfaces';

@Component({
  selector: 'molecula-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {
  @Input()
  get tabs(): ITab[] { return this._copiedTabs };
  set tabs(values: ITab[]) { this._copiedTabs = values };

  private _copiedTabs!: ITab[];

  activeId = 0;

  setActiveTab(id: number) { this.activeId = id }
}
