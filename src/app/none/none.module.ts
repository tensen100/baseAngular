import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoneIndexComponent } from './none-index/none-index.component';
import { NoneRoutingModule } from './none-routing.module';



@NgModule({
  declarations: [
    NoneIndexComponent
  ],
  imports: [
    CommonModule,
    NoneRoutingModule
  ]
})
export class NoneModule { }
