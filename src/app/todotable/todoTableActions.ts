import { createAction, props } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';

export const retrievedTaskListPending = createAction(
  '[Task List/API] Retrieve Task Pending',
  props<{ loading: boolean }>()
);

export const retrievedTaskList = createAction(
  '[Task List/API] Retrieve Task Success',
  props<{
    tasks;
    loading: boolean;
  }>()
);

export const retrievedTaskListFailed = createAction(
  '[Task List/API] Retrieve Task failed',
  props<{ tasks }>()
);
