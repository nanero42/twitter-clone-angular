import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ITab } from 'src/providers/interfaces';

@Component({
  selector: 'app-tabs-molecula',
  templateUrl: './tabs-molecula.component.html',
  styleUrls: ['./tabs-molecula.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsMoleculaComponent implements OnInit {
  @Input()
  get tabs(): ITab[] { return this._copiedTabs };
  set tabs(values: ITab[]) { this._copiedTabs = values };

  private _copiedTabs!: ITab[];

  activeId = 0;

  ngOnInit(): void {
  }

  setActiveTab(id: number) { this.activeId = id }
}
