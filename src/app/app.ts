import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Importaciones de NG-ZORRO
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzTagModule } from 'ng-zorro-antd/tag';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NzLayoutModule,
    NzMenuModule,
    NzAvatarModule,
    NzIconModule,
    NzCardModule,
    NzButtonModule,
    NzSpaceModule,
    NzGridModule,
    NzStatisticModule,
    NzTimelineModule,
    NzTagModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App {
  protected readonly title = signal('portfolio-app');
}
