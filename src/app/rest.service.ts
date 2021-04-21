import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tasks } from './tasks';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

    url : string = 'http://localhost:3000/tasks'

    getTasks() {
      return this.http.get<Tasks[]>(this.url)
    }

}
