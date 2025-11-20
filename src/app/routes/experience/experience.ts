import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, NzCollapseModule, NzTagModule, NzTimelineModule, TranslateModule],
  templateUrl: './experience.html',
  styleUrl: './experience.less',
})
export class Experience {}
