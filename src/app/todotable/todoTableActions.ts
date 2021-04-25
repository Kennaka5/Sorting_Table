import { createAction, props } from '@ngrx/store';

export const retrievedTaskList = createAction(
    '[Task List/API] Retrieve Task Success',
    props<{ Tasks }>()
  );