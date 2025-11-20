import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'app-lab',
  standalone: true,
  imports: [CommonModule, NzButtonModule, NzDividerModule],
  templateUrl: './lab.html',
  styleUrl: './lab.less',
})
export class Lab {
  showCode = false;
  highlighted: 'angular' | 'ngzorro' | 'rxjs' | null = null;

  highlight(type: 'angular' | 'ngzorro' | 'rxjs') {
    this.highlighted = type;
  }
}
