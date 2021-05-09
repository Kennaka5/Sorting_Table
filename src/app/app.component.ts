import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';
import { Tasks } from './tasks';
import { Store, select } from '@ngrx/store';
import {
  retrievedTaskList,
  retrievedTaskListPending,
} from './../app/todotable/todoTableActions';
import { selectTasks } from './app-tasks.selectors';
import { AppState } from './../app/todotable/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'SortingTable';
  // this.store.select(fromStore.getPizzas).map(pizzas => pizza.entities);

  tasks$ = this.store.pipe(select(selectTasks));

  // tasks$: Observable<Tasks[]> = this.store.select((state: any) => {
  //   console.log('got here', state);
  //   // return state.task.tasks
  //   return state.tasks;
  // });

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.store.dispatch(retrievedTaskListPending({ loading: true }));
  }
}
