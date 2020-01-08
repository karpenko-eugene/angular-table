import { createReducer, createSelector, on } from '@ngrx/store';
import { increment, decrement, reset, getData } from './table.actions';

export interface AppState {
  table: TableState;
  json: any;
}

export interface TableState {
  counter: number;
}

export const initialState: TableState = {
  counter: 10,
};

const reducer = createReducer(
  initialState,
  on(increment, (state, action) => ({ ...state, counter: state.counter + action.n })),
  on(decrement, (state, action) => ({ ...state, counter: state.counter - action.n })),
  on(reset, (state, action) => ({ ...state, counter: 0 })),
  on(getData, (state, action) => ({ ...state, json: action.json })),
);

export const selectTable = (state: AppState) => state.table;

export const selectCounter = createSelector(
  selectTable,
  (state: TableState) => state.counter,
);

export function tableReducer(state, action) {
  return reducer(state, action);
}
