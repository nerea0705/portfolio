import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-main-page',
  imports: [
    CommonModule,
    NzButtonModule,
    NzTagModule,
    TranslateModule
  ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.less',
})
export class MainPage {
  fullText = 'Construyo interfaces eficientes, elegantes y mantenibles con Angular & NG Zorro.';
  typingText = '';
  private typingIndex = 0;

  ngOnInit() {
    this.typeText();
  }

  typeText() {
    if (this.typingIndex < this.fullText.length) {
      this.typingText += this.fullText[this.typingIndex];
      this.typingIndex++;
      setTimeout(() => this.typeText(), 35);
    }
  }
}
