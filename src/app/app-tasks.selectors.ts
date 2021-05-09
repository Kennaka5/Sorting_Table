import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from './../app/todotable/app.state';
import { Tasks } from './tasks';
import { TaskState } from "./todotable/todoTableReducer";
 
export const selectTasks = createSelector(
  (state: AppState) => {
    console.log('selectTasks', state);
    return state.tasks;
  },
  (tasks: TaskState) => tasks.tasks
);

// export const selectCollectionState = createFeatureSelector<
//   AppState,
//   ReadonlyArray<string>
// >("collection");
 
// export const selectBookCollection = createSelector(
//   selectTasks,
//   (tasks: Array<Task>, collection: Array<string>) => {
//     return collection.map((id) => books.find((book) => book.id === id));
//   }
// );