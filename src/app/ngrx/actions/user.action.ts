/*
 Author: MECHREVO
 Create Time: 2021-01-02 12:16
 Description:
*/


import { createAction, props } from '@ngrx/store';
import { type } from '../../tools';
import { UserState } from '../reducer/user.reducer';

export const setUser = createAction(type('[user] set'), props<UserState>());

