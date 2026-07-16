import { Component } from '@angular/core';
import { StatusBadge } from '../../shared/components/status-badge/status-badge.component';

@Component({
  selector: 'app-education',
  imports: [StatusBadge],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class Education {}
