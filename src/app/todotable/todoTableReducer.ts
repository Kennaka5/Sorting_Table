import { Tasks } from './../tasks';
import { createReducer, on, Action } from '@ngrx/store';
import {retrievedTaskList} from './todoTableActions'

const initalState : Array<Tasks> = [];

const _taskReducer = createReducer(
    initalState, on(retrievedTaskList ,(state, { tasks }) => [...tasks])
);

export function reducer(state, action) {
    return _taskReducer(state, action)
}

