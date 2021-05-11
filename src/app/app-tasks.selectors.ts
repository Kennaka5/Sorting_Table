import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from './../app/todotable/app.state';
import { TaskState } from "./todotable/todoTableReducer";
 
export const selectTasks = createSelector(
  (state: AppState) => {
    console.log('selectTasks', state.tasks);
    return state.tasks;
  },
  (tasks: TaskState) => tasks.tasks
);

// export const unstartedTasks = createSelector(
//   (state: AppState) => {
//     console.log('selectTasks', state.tasks);
//     return state.tasks;
//   },
//   (tasks: TaskState) => {
//      tasks.tasks
//   }
// );

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