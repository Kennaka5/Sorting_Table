import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';
import {Tasks} from './tasks';
import { Store, select } from '@ngrx/store';
import {retrievedTaskList} from './../app/todotable/todoTableActions'
import {selectTasks} from './app-tasks.selectors'
import { AppState } from './../app/app-state.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'SortingTable';
  tasks$ = this.store.pipe(select(selectTasks));


 constructor(
  private RestService: RestService,
  private store: Store<AppState>
) {}



 ngOnInit() {
  this.RestService
    .getTasks()
    .subscribe((tasks) => this.store.dispatch(retrievedTaskList({ tasks })));
}

}

