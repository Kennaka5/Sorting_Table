import { Tasks } from './../tasks';
import { createReducer, on, Action, State } from '@ngrx/store';
import {
  retrievedTaskList,
  retrievedTaskListPending,
} from './todoTableActions';
import { AppState } from './app.state';

export interface TaskState {
  tasks: Array<Tasks>;
  loading: boolean;
}

const initialState: TaskState = {
  tasks: [],
  loading: false,
};

// https://ngrx.io/guide/store/walkthrough

export const taskReducer = createReducer(
  initialState,
  on(retrievedTaskListPending, (state, action) => {
    console.log('retrievedTaskListPending', state, action);
    return { ...state, loading: true };
  }),
  on(retrievedTaskList, (state, action) => {
    console.log('retrievedTaskList', state, action);
    return { ...state, tasks: action.tasks, loading: false };
  })
  // on(retrievedTaskList, (state, {tasks}) => tasks)
);

// export function reducer(state: TaskState | undefined, action: Action) {
// return _taskReducer(state, action);
// }
