import { Component, signal } from '@angular/core';
import { PrimeImportsModule } from '../../../primeng/config/primeng.imports';
import { TranslatePipe } from '@ngx-translate/core';

interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

interface QuickLink {
  label: string;
  section: string;
}

@Component({
  selector: 'app-footer',
  imports: [PrimeImportsModule, TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear = new Date().getFullYear();

  socialLinks = signal<SocialLink[]>([
    { name: 'GitHub', icon: 'pi pi-github', url: 'https://github.com/Loberos?tab=repositories' },
    { name: 'LinkedIn', icon: 'pi pi-linkedin', url: 'https://www.linkedin.com/in/randy-becker-rengifo-mirabal' },
    { name: 'Email', icon: 'pi pi-envelope', url: 'mailto:rengiforandy11@gmail.com' }
  ]);

  quickLinks = signal<QuickLink[]>([
    { label: 'nav.home', section: 'hero' },
    { label: 'nav.about', section: 'about' },
    { label: 'nav.projects', section: 'projects' },
    { label: 'nav.skills', section: 'skills' },
    { label: 'nav.education', section: 'education' },
    { label: 'nav.contact', section: 'contact' }
  ]);

  scrollToSection(sectionId: string): void {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      const navbarHeight = 70;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
