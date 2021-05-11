import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  retrievedTaskList,
  retrievedTaskListPending,
} from './../app/todotable/todoTableActions';
import { selectTasks } from './app-tasks.selectors';
import { AppState } from './../app/todotable/app.state';
import { filter, map } from 'rxjs/operators';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { taskReducer, TaskState } from './todotable/todoTableReducer';
import { from, Observable, of, throwError } from 'rxjs';
import { Tasks } from './tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'SortingTable';
  // this.store.select(fromStore.getPizzas).map(pizzas => pizza.entities);

  tasks$: Observable<Tasks[]> = this.store.pipe(select(selectTasks));
  tasks: Tasks[] = [];
  tasksPending: Tasks[] = [];
  tasksFinished: Tasks[] = [];
  tasksStarted: Tasks[] = [];

  // tasksPending$: Observable<Tasks[]> = this.tasks$.pipe(
  //   map((tasks) => tasks.filter((task) => task.priority === 10))
  // );
  // tasksStarted$: Observable<Tasks[]> = this.tasks$.pipe(
  //   map((tasks) => tasks.filter((task) => task.priority === 2))
  // );
  // tasksfinished$: Observable<Tasks[]> = this.tasks$.pipe(
  //   map((tasks) => tasks.filter((task) => task.priority === 3))
  // );

  // dummyFrom: Observable<number> = from([1, 2, 3, 4, 5]);

  dummy: Observable<number[]> = of([1, 2, 3, 4, 5]);
  evenDummies$: Observable<number[]> = this.dummy.pipe(
    map((numbers) => numbers.filter((num) => num % 2 === 0))
  );

  // tasks$: Observable<Tasks[]> = this.store.select((state: any) => {
  //   console.log('got here', state);
  //   // return state.task.tasks
  //   return state.tasks;
  // });

  constructor(
    private store: Store<AppState>,
    // private tasks: Tasks[]
  ) {}

  drop(event: CdkDragDrop<Tasks[]>) {
    console.log('event', event);

    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  ngOnInit() {
    // const evenDummyFrom = this.dummyFrom.pipe(filter((num) => num % 2 === 0));

    this.tasks$
      .subscribe((tasks: Tasks[]) => {
        this.tasks = tasks;
        this.tasksStarted = tasks.filter((task) => task.priority === 2);
        this.tasksFinished = tasks.filter((task) => task.priority === 3);
        this.tasksPending = tasks.filter((task) => task.priority === 10);
      });

    this.store.dispatch(retrievedTaskListPending({ loading: true }));
  }
}
