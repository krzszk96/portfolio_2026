import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-web-link',
  templateUrl: './web-link.component.html',
  styleUrl: './web-link.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WebLink {
  href = input('');
  disabled = input(false);
}
