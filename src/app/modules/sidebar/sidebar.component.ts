import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { EAccordionOpenStrategy, EIcons, EKeyboard } from 'src/app/enums';
import { IAccordionItem, IAccordionState, IStore } from 'src/app/interfaces';
import { toggle } from 'src/store/sidebar/actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];

  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    const clickedEls = event.composedPath() as HTMLElement[];
    const isClickedInside = clickedEls?.length && clickedEls.some((el) => el?.classList?.contains('sidebar'));

    if (!isClickedInside) {
      this.store.dispatch(toggle());
    }
  }
  @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent) {
    if (event.key === EKeyboard.Escape) {
      this.store.dispatch(toggle())
    }
  }

  @Input() accordionItems!: IAccordionItem[];

  sedibar$!: Observable<boolean>;
  accordion$!: Observable<IAccordionState>;

  style = { 'display': 'none', 'opacity': 0 };
  eIcons = EIcons;
  eAccordionOpenStrategy = EAccordionOpenStrategy;

  constructor(
    private store: Store<{ sidebar: IStore["sidebar"], accordion: IStore["accordion"] }>,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.sedibar$ = this.store.select('sidebar');

    this._subscriptions.push(
      this.sedibar$.subscribe((value) => {
        value ? this.show() : this.hide();
        this.cdr.detectChanges();
      }),
    );
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach((s) => s.unsubscribe());
  }

  hide() {
    this.style = { 'display': 'none', 'opacity': 0 };
  }

  show() {
    this.style = { 'display': 'block', 'opacity': 1 };
  }
}
