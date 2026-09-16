import { Component, ChangeDetectionStrategy, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { PortfolioService } from '../../shared/services/portfolio.service';
import { ContactMetaType, SocialPlatform } from '../../shared/data/portfolio.model';

const META_ICONS: Record<ContactMetaType, string> = {
  education: '/assets/icons/people.svg',
  location: '/assets/icons/location.svg',
  email: '/assets/icons/link.svg'
};

const SOCIAL_ICONS: Record<SocialPlatform, string> = {
  github: '/assets/icons/github.svg',
  linkedin: '/assets/icons/linkedin.svg'
};

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Sidebar {
  private portfolio = inject(PortfolioService);

  private data = toSignal(this.portfolio.load());

  readonly contact = computed(() => this.data()?.contact);

  readonly avatar = '/assets/images/profile.jpg';

  readonly icons = [
    { icon: '/assets/icons/coffee.svg', label: 'Coffee' },
    { icon: '/assets/icons/code.svg', label: 'Code' },
    { icon: '/assets/icons/terminal.svg', label: 'Terminal' },
    { icon: '/assets/icons/layout.svg', label: 'Frontend' },
    { icon: '/assets/icons/rocket.svg', label: 'Deploy' }
  ];

  metaIcon(type: ContactMetaType): string {
    return META_ICONS[type];
  }

  socialIcon(platform: SocialPlatform): string {
    return SOCIAL_ICONS[platform];
  }
}
