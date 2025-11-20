import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, NzTimelineModule, TranslateModule],
  templateUrl: './education.html',
  styleUrl: './education.less',
})
export class Education {}
