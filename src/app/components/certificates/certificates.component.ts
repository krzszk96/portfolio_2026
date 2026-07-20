import { Component, ChangeDetectionStrategy } from '@angular/core';
import { StatusBadge } from '../../shared/components/status-badge/status-badge.component';

@Component({
  selector: 'app-certificates',
  imports: [StatusBadge],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Certificates {}
