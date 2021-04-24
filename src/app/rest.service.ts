import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

import { Tasks } from './tasks';

@Injectable({providedIn: 'root'})
export class RestService {

  constructor(private http : HttpClient) { }

  // TODO: move this URL into environment config file
  // https://balramchavan.medium.com/configure-and-build-angular-application-for-different-environments-7e94a3c0af23
    url : string = 'http://localhost:3000/tasks'

    getTasks(): Observable<Tasks[]> {
      return this.http.get<Tasks[]>(this.url)
    }

}
