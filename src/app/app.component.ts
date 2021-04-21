import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';
import {Tasks} from './tasks';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'SortingTable';
 constructor(private rs: RestService) {}

 tasks: Tasks[] = [];

 ngOnInit(): void {
   this.rs.getTasks().subscribe(
     (response) => {
       this.tasks = response;
       console.log(this.tasks)
     }
   )
 }

}

