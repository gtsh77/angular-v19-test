import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-index-main',
  imports: [SharedModule, CommonModule],
  templateUrl: './index-main.component.html',
  styleUrl: './index-main.component.scss'
})
export class IndexMainComponent {
  public v1 = "huhu"
}
