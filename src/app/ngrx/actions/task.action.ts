/*
 Author: MECHREVO
 Create Time: 2021-01-02 12:16
 Description:
*/

import { createAction, props } from '@ngrx/store';
import { type } from '../../tools';
import { TaskState } from '../reducer/task.reducer';

export const addTask = createAction(type('[task] add'), props<TaskState>());
export const removeTask = createAction(type('[task] remove'), props<TaskState>());
