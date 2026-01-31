import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module'
@Component({
  selector: 'app-index-main',
  imports: [SharedModule],
  templateUrl: './index-main.component.html',
  styleUrl: './index-main.component.scss'
})
export class IndexMainComponent {
  public v1 = "huhu"
}
