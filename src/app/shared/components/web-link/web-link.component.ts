import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-web-link',
  templateUrl: './web-link.component.html',
  styleUrl: './web-link.component.scss'
})
export class WebLink {
  @Input() href = '';
  @Input() disabled = false;
}
