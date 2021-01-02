/*
 Author: MECHREVO
 Create Time: 2021-01-02 15:38
 Description:
*/

export interface ResponseData<T> {
  msg: string;
  data: T;
  code: number;
}
