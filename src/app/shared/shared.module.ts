import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent }  from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarComponent,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    RouterModule
  ]
})
export class SharedModule { }
