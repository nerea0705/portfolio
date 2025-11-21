import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { DEFAULT_LANG, DEFAULT_THEME, THEME_DARK, THEME_LIGHT } from './constants';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    NzLayoutModule,
    NzMenuModule,
    NzSelectModule,
    FormsModule,
    RouterModule,
    TranslateModule,
    NzIconModule,
    NzButtonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App {

  isDark: boolean = false;
  currentLang: string = DEFAULT_LANG;

  constructor(private translate: TranslateService) {
    this.currentLang = localStorage.getItem('lang') || DEFAULT_LANG;
    this.translate.setDefaultLang(DEFAULT_LANG);
    this.translate.use(this.currentLang);
  }

  ngOnInit() {
    const theme = localStorage.getItem('theme') || DEFAULT_THEME;
    this.isDark = theme === THEME_DARK;
    this.applyTheme();
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    localStorage.setItem('theme', this.isDark ? THEME_DARK : THEME_LIGHT);
    this.applyTheme();
  }

  applyTheme() {
    const body = document.body;
    if (this.isDark) {
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
    }
  }

  changeLang(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
}
