import { createReducer, on } from '@ngrx/store';
import { toggle } from './actions';

export const initalState = false;

export const sidebarReducer = createReducer(
  initalState,
  on(toggle, (state) => !state),
);
