import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { EIcons, EKeyboard } from 'src/app/enums';
import { IStore } from 'src/app/interfaces';
import { toggle } from 'src/store/sidebar/actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];

  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    const clickedEl = event.composedPath()[0];
    const isHTMLEl = clickedEl instanceof HTMLElement;
    const isClickedOutside = clickedEl && isHTMLEl && !clickedEl.classList.contains('sidebar');

    if (isClickedOutside) {
      this.store.dispatch(toggle());
    }
  }
  @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent) {
    if (event.key === EKeyboard.Escape) {
      this.store.dispatch(toggle())
    }
  }

  sedibar$!: Observable<boolean>;
  style = { 'display': 'none', 'opacity': 0 };
  eIcons = EIcons;

  constructor(
    private store: Store<{ sidebar: IStore["sidebar"] }>,
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
