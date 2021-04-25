import { Tasks } from './../tasks';
import { createReducer, on } from '@ngrx/store';
import {increment} from './todoTableActions'

const initalState : Tasks = 
    {
        id: '1',
        priority: '1',
        description: "build data",
        status: 1,
        createdAt: "date"
    };

const _taskReducer = createReducer(
    initalState, on(increment ,state => state)
);

export function reducer(state, action) {
    return _taskReducer(state, action)
}
