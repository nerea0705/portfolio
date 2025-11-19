import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    TranslateModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App {
  constructor(private translate: TranslateService) {
    this.translate.use('es');
  }
}
