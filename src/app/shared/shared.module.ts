import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent }  from './navbar/navbar.component';
import { FooterComponent }  from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    RouterModule
  ]
})
export class SharedModule { }
