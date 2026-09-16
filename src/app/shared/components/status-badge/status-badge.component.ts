import { Component, ChangeDetectionStrategy, input } from '@angular/core';

export type StatusVariant = 'done' | 'progress' | 'default';

@Component({
  selector: 'app-status-badge',
  templateUrl: './status-badge.component.html',
  styleUrl: './status-badge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusBadge {
  label = input.required<string>();
  variant = input<StatusVariant>('default');
}
