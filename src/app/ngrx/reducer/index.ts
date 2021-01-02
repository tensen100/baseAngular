/*
 Author: MECHREVO
 Create Time: 2021-01-01 21:37
 Description:
*/

import * as fromUser from './user.reducer';
import * as fromTask from './task.reducer';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../environments/environment';

export interface State {
  user: fromUser.UserState;
  task: fromTask.TaskState;
}

const reducers = {
  user: fromUser.reducer,
  ask: fromTask.reducer
};

export const getUserState = (state: State): fromUser.UserState => state.user;

export const getTaskState = (state: State): fromTask.TaskState => state.task;

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ]
})
export class AppStoreModule {

}
