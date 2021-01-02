/*
 Author: MECHREVO
 Create Time: 2021-01-01 21:41
 Description:
*/

import { createStorageFactory } from '../tools';
import { UserState } from '../ngrx/reducer/user.reducer';
import { TaskState } from '../ngrx/reducer/task.reducer';

export const UserStorage = createStorageFactory<UserState>('user');

export const TaskStorage = createStorageFactory<TaskState[]>('task', []);
