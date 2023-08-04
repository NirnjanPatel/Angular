import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MouseHoverDirective } from '../directive/mouse-hover.directive';

@Component({
  selector: 'app-student-standalone',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './student-standalone.component.html',
  styleUrls: ['./student-standalone.component.css'],
  hostDirectives: [MouseHoverDirective],
})
export class StudentStandaloneComponent {
  items: any[] = ['value1', 'value2'];
}
