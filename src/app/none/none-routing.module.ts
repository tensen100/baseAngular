import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoneIndexComponent } from './none-index/none-index.component';


const routes: Routes = [
  {
    path: '',
    component: NoneIndexComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class NoneRoutingModule { }
