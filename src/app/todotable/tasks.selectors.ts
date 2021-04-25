import { createSelector } from "@ngrx/store";
import { AppState } from "./app.state";
import { Tasks } from './../tasks';

export const selectTasks = createSelector(
  (state: AppState) => state.tasks,
  (tasks: Array<Tasks>) => tasks
);
