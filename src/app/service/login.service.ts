import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { UserState } from '../ngrx/reducer/user.reducer';
import { Store } from '@ngrx/store';
import { setUser } from '../ngrx/actions/user.action';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private $http: HttpService,
    private store: Store
  ) { }

  login(): void {
    this.$http.get<UserState>('./assets/data/login.json')
      .subscribe(res => {
        this.store.dispatch(setUser(res));
      });
  }
}
