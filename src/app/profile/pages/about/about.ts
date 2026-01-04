import { Component, signal } from '@angular/core';
import { PrimeImportsModule } from '../../../primeng/config/primeng.imports';
import { TranslatePipe } from '@ngx-translate/core';

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface Language {
  name: string;
  level: string;
  flag: string;
  percentage: number;
}

@Component({
  selector: 'app-about',
  imports: [PrimeImportsModule, TranslatePipe],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  services = signal<Service[]>([
    {
      icon: 'pi pi-desktop',
      title: 'about.services.frontend.title',
      description: 'about.services.frontend.desc'
    },
    {
      icon: 'pi pi-server',
      title: 'about.services.backend.title',
      description: 'about.services.backend.desc'
    },
    {
      icon: 'pi pi-database',
      title: 'about.services.database.title',
      description: 'about.services.database.desc'
    },
    {
      icon: 'pi pi-cog',
      title: 'about.services.support.title',
      description: 'about.services.support.desc'
    }
  ]);

  languages = signal<Language[]>([
    { name: 'about.lang.spanish', level: 'about.lang.native', flag: '🇵🇪', percentage: 100 },
    { name: 'about.lang.english', level: 'about.lang.basic', flag: '🇬🇧', percentage: 40 }
  ]);
}
