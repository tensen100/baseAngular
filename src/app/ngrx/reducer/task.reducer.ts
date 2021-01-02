/*
 Author: MECHREVO
 Create Time: 2021-01-01 21:39
 Description:
*/

import { TaskStorage } from '../../storage';
import { Action, createReducer, on } from '@ngrx/store';
import * as TaskActions from '../actions/task.action';

export interface TaskState {
  id: number;
  name: string;
  date: number;
}

const initialState: TaskState[] = TaskStorage.get();

const addTask = (state: TaskState[], data: TaskState) => {
  state.push(data);
  return state;
};
const removeTask = (state: TaskState[], data: TaskState) => {
  const index = state.findIndex( item => item.id === data.id);
  if (index > -1) {
    state.splice(index, 1);
  }
  return state;
};

const taskReducer = createReducer(
  initialState,
  on(TaskActions.addTask, addTask),
  on(TaskActions.removeTask, removeTask)
);

export const reducer = (state: TaskState[] | undefined, action: Action) => taskReducer(state, action);
