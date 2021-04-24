import { Component, OnInit} from '@angular/core';
import { RestService } from './rest.service';
import {Tasks} from './tasks';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SortingTable';
 constructor(private rs: RestService) {}

 tasks: Tasks[] = [];

//  loading: boolean = false;
//  errorMessage;

 ngOnInit():void {
   console.log('oninit')
  this.rs.getTasks().subscribe(
    (response) => {
      this.tasks = response;
      console.log(this.tasks)
    }
  )
}

}





// ngOnInit() {
//   this.rs.getTasks().subscribe(
//     (response) => {
//       this.tasks = response;
//       console.log(this.tasks)
//     }
//   )
// }

/**
 *  public getTasks() {
  this.loading = true;
  this.errorMessage = "";
  this.rs.getTasks()
    .subscribe(
      (response) => {                           //next() callback
        console.log('response received')
        this.tasks = response; 
      },
      (error) => {                              //error() callback
        console.error('Request failed with error')
        this.errorMessage = error;
        this.loading = false;
      },
      () => {                                   //complete() callback
        console.error('Request completed')      //This is actually not needed 
        this.loading = false; 
      })
}
 */

