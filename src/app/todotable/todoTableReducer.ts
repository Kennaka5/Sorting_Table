import { Tasks } from './../tasks';
import { createReducer, on, Action } from '@ngrx/store';
import {retrievedTaskList} from './todoTableActions'

const initalState : Array<Tasks> = [//{
// "id": 1,
// "priority": 1,
// "description": "build data",
// "status": 1,
// "createdAt": "date"
// }
];

const _taskReducer = createReducer(
    initalState, on(retrievedTaskList ,(state, { tasks }) => [...tasks])
);

export function reducer(state, action) {
    console.log(state, action)
    return _taskReducer(state, action)
}

