import { Component, input } from '@angular/core';

@Component({
  selector: 'app-status-badge',
  templateUrl: './status-badge.component.html',
  styleUrl: './status-badge.component.scss'
})
export class StatusBadge {
  label = input.required<string>();
  variant = input<'done' | 'progress' | 'default'>('default');
}
