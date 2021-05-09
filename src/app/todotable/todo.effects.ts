import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {
  retrievedTaskListPending,
  retrievedTaskList,
} from './todoTableActions';
import { RestService } from './../rest.service';

@Injectable()
export class GetTaskListEffects {
  getTasks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(retrievedTaskListPending),
      mergeMap(() =>
        this.restService.getTasks().pipe(
          map((tasks) => {
            return retrievedTaskList({ tasks, loading: false });
          })
        )
      )
    );
  });
  constructor(private actions$: Actions, private restService: RestService) {}
}
