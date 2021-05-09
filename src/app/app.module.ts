import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
// import * as TaskReducer  from './todotable/todoTableReducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { GetTaskListEffects } from './todotable/todo.effects'
import { AppState } from './todotable/app.state';
import { taskReducer } from './todotable/todoTableReducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    EffectsModule.forRoot([GetTaskListEffects]),
    // https://medium.com/@aravindfz/setting-up-storemodule-in-ngrx-4-0-b7c60732aa64
    StoreModule.forRoot({
      tasks: taskReducer
    }),
    // StoreModule.forFeature('task', TaskReducer.reducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
