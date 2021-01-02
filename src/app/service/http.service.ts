import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseData } from '../domain';
import { catchError, mergeMap } from 'rxjs/operators';
import { RESPONSE_SUCCESS_CODE } from '../config';
import { EMPTY, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get<T>(url: string, params?: any): Observable<T> {
    return this.http.get<ResponseData<T>>(url, {params}).pipe(
      mergeMap( res => res.code === RESPONSE_SUCCESS_CODE ? of(res.data) : throwError(res.msg)),
      catchError( err => {
        console.log('错误处理===>', err);
        return EMPTY;
      })
    );
  }
}
