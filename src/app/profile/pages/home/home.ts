import { Component, signal  } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import {PrimeImportsModule} from '../../../primeng/config/primeng.imports';
import {RouterLink} from '@angular/router';

interface Technology {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  imports: [
    TranslatePipe,
    PrimeImportsModule,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  projectsCount = signal(10);
  experienceYears = signal(1);
  technologiesCount = signal(15);

  technologies = signal<Technology[]>([
    { name: 'Angular', icon: 'pi pi-angle-right' },
    { name: 'TypeScript', icon: 'pi pi-code' },
    { name: 'Spring Boot', icon: 'pi pi-server' },
    { name: 'PostgreSQL', icon: 'pi pi-database' },
    { name: 'Java', icon: 'pi pi-hashtag' },
    { name: 'Git', icon: 'pi pi-github' },
    { name: 'Docker', icon: 'pi pi-box' },
    { name: 'REST APIs', icon: 'pi pi-link' },
  ]);

  scrollToSection(sectionId: string): void {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
