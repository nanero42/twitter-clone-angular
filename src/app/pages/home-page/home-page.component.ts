import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  tabs = [
    { id: 0, value: 'For you' },
    { id: 1, value: 'Following' },
  ];
}
