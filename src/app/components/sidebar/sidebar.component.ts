import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { EKeyboard } from 'src/app/enums';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    const clickedEl = event.composedPath()[0];
    const isHTMLEl = clickedEl instanceof HTMLElement;
    const isClickedOutside = clickedEl && isHTMLEl && !clickedEl.classList.contains('sidebar');

    isClickedOutside ? this.hide() : this.show();
  }

  @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent) {
    event.key === EKeyboard.Escape ? this.hide() : void 0;
  }

  style = {
    'display': 'block',
    'opacity': 1,
  }

  hide() {
    this.style = { 'display': 'none', 'opacity': 0 }
  }

  show() {
    this.style = { 'display': 'block', 'opacity': 1 }
  }
}
