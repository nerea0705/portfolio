import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NzDividerModule, TranslateModule],
  templateUrl: './about.html',
  styleUrl: './about.less',
})
export class About {}
