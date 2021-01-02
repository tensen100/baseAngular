import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutIndexComponent } from './about-index/about-index.component';
import { AboutRoutingModule } from './about-routing.module';



@NgModule({
  declarations: [AboutIndexComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
