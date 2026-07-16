import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StatusBadge } from '../../shared/components/status-badge/status-badge.component';

@Component({
  selector: 'app-experience',
  imports: [RouterLink, StatusBadge],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class Experience {}
