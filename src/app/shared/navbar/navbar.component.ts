import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public url = ""
  public isCollapsed: boolean = true;

  public checkUrl(string: string): boolean {
    if(this.url.indexOf(string) > - 1) return true;
    else return false;
  }

  constructor(private router:Router) {
    //watch for route url change
    router.events.subscribe((route) => {
      if(route instanceof NavigationEnd){
        this.url = route.url;
      }      
    });
  }
}
