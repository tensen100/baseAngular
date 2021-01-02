import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { LoginService } from './login.service';



@NgModule({
  providers: [
    HttpService,
    LoginService
  ]
})
export class ServiceModule { }
