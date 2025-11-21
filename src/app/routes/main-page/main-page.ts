import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

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

  typingText: string = '';
  fullText: string = '';
  private typingIndex: number = 0;

  constructor(
    private translateService: TranslateService,
    private router: Router
  ) {}
  
  goToExperience() {
    this.router.navigate(['/experience']);
  }

  goToProjects() {
    this.router.navigate(['/projects']);
  }

  ngOnInit() {
    this.loadTypingText();
    this.translateService.onLangChange.subscribe(() => {
      this.loadTypingText();
    });
  }

  loadTypingText() {
    this.translateService.get('home.heroTyping').subscribe((text: string) => {
      this.fullText = text;
      this.typingText = '';
      this.typingIndex = 0;
      this.typeText();
    });
  }

  typeText() {
    if (this.typingIndex < this.fullText.length) {
      this.typingText += this.fullText[this.typingIndex];
      this.typingIndex++;
      setTimeout(() => this.typeText(), 35);
    }
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/documents/CV_2025.pdf';
    link.download = 'CV_2025.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
