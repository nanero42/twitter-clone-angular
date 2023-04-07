import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EPageName } from '../enums';

@Injectable({
  providedIn: 'root'
})
export class CurrentPageService {
  currentPageName$: BehaviorSubject<EPageName> = new BehaviorSubject('' as EPageName);

  constructor() { }
}
