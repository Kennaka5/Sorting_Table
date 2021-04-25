import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "./app-state.model";
import { Tasks } from './tasks';
 
export const selectTasks = createSelector(
  (state: AppState) => state.tasks,
  (tasks: Array<Tasks>) => tasks
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