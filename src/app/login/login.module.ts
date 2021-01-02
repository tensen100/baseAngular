import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginIndexComponent } from './login-index/login-index.component';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [LoginIndexComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
