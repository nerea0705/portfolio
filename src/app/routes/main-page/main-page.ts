import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-main-page',
  imports: [
    CommonModule,
    NzButtonModule
  ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.less',
})
export class MainPage {

}
