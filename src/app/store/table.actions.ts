import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Table Component] Increment', props<{ n: number }>());
export const decrement = createAction('[Table Component] Decrement', props<{ n: number }>());
export const reset = createAction('[Table Component] Reset');
export const getData = createAction('[Table Component] getData', props<{ json: any }>());
