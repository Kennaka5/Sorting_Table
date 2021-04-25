import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';
import {Tasks} from './tasks';
import { Store, select } from '@ngrx/store';
import {retrievedTaskList} from './../app/todotable/todoTableActions'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'SortingTable';
 constructor(
  private RestService: RestService,
  private store: Store
) {}



 ngOnInit() {
  this.RestService
    .getTasks()
    .subscribe((Tasks) => this.store.dispatch(retrievedTaskList({ Tasks })));
}
}

