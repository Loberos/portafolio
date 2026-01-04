import { Component, signal } from '@angular/core';
import { PrimeImportsModule } from '../../../primeng/config/primeng.imports';
import { TranslatePipe } from '@ngx-translate/core';

interface Project {
  title: string;
  description: string;
  role: string;
  type: string;
  severity: 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast';
  technologies: string[];
  images: string[];
  github?: string;
  demo?: string;
  company?: string;
  achievements?: string[];
}

@Component({
  selector: 'app-projects',
  imports: [PrimeImportsModule, TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  activeTab = signal<'university' | 'internship'>('university');

  carouselResponsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '1024px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  setActiveTab(tab: 'university' | 'internship'): void {
    this.activeTab.set(tab);
  }

  universityProjects = signal<Project[]>([
    {
      title: 'Tomate Ritmo',
      description: 'projects.tomateRitmo.desc',
      role: 'projects.tomateRitmo.role',
      type: 'projects.types.iot',
      severity: 'success',
      technologies: ['Angular', 'Spring Boot', 'IoT', 'Python', 'TensorFlow'],
      "images": [
        "https://i.postimg.cc/SRMsPnHh/Whats-App-Image-2026-01-03-at-19-13-46.jpg",
        "https://i.postimg.cc/yxZdGD2C/Whats-App-Image-2026-01-03-at-19-13-46-(1).jpg",
        "https://i.postimg.cc/kGb4H2L3/Whats-App-Image-2026-01-03-at-19-13-46-(2).jpg",
        "https://i.postimg.cc/3NvRqkVq/Whats-App-Image-2026-01-03-at-19-13-46-(3).jpg",
        "https://i.postimg.cc/Gty2f463/Whats-App-Image-2026-01-03-at-19-13-46-(4).jpg",
        "https://i.postimg.cc/D0XZNSRv/Whats-App-Image-2026-01-03-at-19-13-46-(5).jpg",
        "https://i.postimg.cc/cCnHzvPs/Whats-App-Image-2026-01-03-at-19-13-46-(6).jpg",
        "https://i.postimg.cc/907MkDsj/Whats-App-Image-2026-01-03-at-19-13-46-(7).jpg"
      ],
      github: 'https://github.com/Loberos/tomate-ritmo-documentation'
    },
    {
      title: 'Hairy Paws',
      description: 'projects.hairyPaws.desc',
      role: 'projects.hairyPaws.role',
      type: 'projects.types.web',
      severity: 'danger',
      technologies: ['Angular', 'NestJS', 'MySQL', 'TypeScript'],
      images: [
        'https://i.postimg.cc/JhVwT89G/image.png',
        'https://i.postimg.cc/MZshCVCk/image.png',
        'https://i.postimg.cc/sXtsRWL4/image.png',
        'https://i.postimg.cc/4xJZZsWq/image.png',
        'https://i.postimg.cc/C5TT2gZv/image.png',
        'https://i.postimg.cc/D0Dp8dh8/image.png',
        'https://i.postimg.cc/Pq46mkhG/image.png',
        'https://i.postimg.cc/xTzt6mY3/image.png',
        'https://i.postimg.cc/tJVtm004/image.png',
        'https://i.postimg.cc/nLRPytW4/image.png',
        'https://i.postimg.cc/tTn28nWb/image.png',
        'https://i.postimg.cc/52Pg0Sm1/image.png',
        'https://i.postimg.cc/6QghV6Sm/image.png',
        'https://i.postimg.cc/hvrxYKyg/image.png',
        'https://i.postimg.cc/W4kZvGW5/image.png',
        'https://i.postimg.cc/MTwnJhjG/image.png',
        'https://i.postimg.cc/28yVYd3n/image.png',
        'https://i.postimg.cc/g0V0sNBb/image.png',
        'https://i.postimg.cc/8c5P1DkT/image.png',
        'https://i.postimg.cc/NF5Y34bM/image.png',
        'https://i.postimg.cc/1zsSmPMb/image.png',
        'https://i.postimg.cc/zvsm91Vt/image.png',
        'https://i.postimg.cc/dVKP6wMD/image.png',
        'https://i.postimg.cc/6qGgV1Yd/image.png',
        'https://i.postimg.cc/2Smj64SH/image.png',
        'https://i.postimg.cc/MGM5qVyn/Whats-App-Image-2025-07-05-at-5-07-20-PM.jpg',
        'https://i.postimg.cc/9QNb6Jq3/Whats-App-Image-2025-07-05-at-5-07-20-PM-1.jpg',
        'https://i.postimg.cc/BnvN7dbc/Whats-App-Image-2025-07-05-at-5-07-20-PM-2.jpg',
        'https://i.postimg.cc/RV4gK3zY/Whats-App-Image-2025-07-05-at-5-07-20-PM-3.jpg',
        'https://i.postimg.cc/HszB2pYk/Whats-App-Image-2025-07-05-at-5-07-20-PM-4.jpg',
        'https://i.postimg.cc/2yFTgYnT/Whats-App-Image-2025-07-05-at-5-07-20-PM-5.jpg',
        'https://i.postimg.cc/bYQ6Zx4b/Whats-App-Image-2025-07-05-at-5-07-20-PM-6.jpg',
        'https://i.postimg.cc/fyhBHySJ/Whats-App-Image-2025-07-05-at-5-07-20-PM-7.jpg'
      ],
      github: 'https://github.com/Loberos/hairy-paws-documentation'
    },
    {
      title: 'FinApp',
      description: 'projects.finApp.desc',
      role: 'projects.finApp.role',
      type: 'projects.types.web',
      severity: 'warn',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'JWT'],
      "images": [
        "https://i.postimg.cc/9XGw1TpQ/Whats-App-Image-2026-01-03-at-16-36-40.jpg",
        "https://i.postimg.cc/59wQpv34/Whats-App-Image-2026-01-03-at-16-36-40-(1).jpg",
        "https://i.postimg.cc/3rg09pBY/Whats-App-Image-2026-01-03-at-16-36-40-(2).jpg",
        "https://i.postimg.cc/Vsj04MRP/Whats-App-Image-2026-01-03-at-16-36-40-(3).jpg",
        "https://i.postimg.cc/Kcn3QLNF/Whats-App-Image-2026-01-03-at-16-36-40-(4).jpg",
        "https://i.postimg.cc/G3kTzYjf/Whats-App-Image-2026-01-03-at-16-36-40-(5).jpg",
        "https://i.postimg.cc/tRhnDPzf/Whats-App-Image-2026-01-03-at-16-36-40-(6).jpg",
        "https://i.postimg.cc/9XGw1TBK/Whats-App-Image-2026-01-03-at-16-36-40-(7).jpg",
        "https://i.postimg.cc/zDnHpWk4/Whats-App-Image-2026-01-03-at-16-36-40-(8).jpg",
        "https://i.postimg.cc/7hMC6860/Whats-App-Image-2026-01-03-at-16-36-40-(9).jpg"
      ],
      github: 'https://github.com/Loberos/finapp-documentation'
    }
  ]);

  internshipProjects = signal<Project[]>([
    {
      title: 'Sistema de Gestión Estudiantil',
      description: 'projects.studentSystem.desc',
      role: 'projects.studentSystem.role',
      type: 'projects.types.enterprise',
      severity: 'info',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'DDD'],
      company: 'LAZARUS TECHNOLOGIES E.I.R.L.',
      "images": [
        "https://i.postimg.cc/dtJp4LpF/Whats-App-Image-2026-01-03-at-20-07-23.jpg",
        "https://i.postimg.cc/L6mwNnwK/Whats-App-Image-2026-01-03-at-20-07-23-(1).jpg",
        "https://i.postimg.cc/jdRmZLmY/Whats-App-Image-2026-01-03-at-20-07-23-(2).jpg",
        "https://i.postimg.cc/RVvyXNyr/Whats-App-Image-2026-01-03-at-20-07-23-(3).jpg",
        "https://i.postimg.cc/MKzNdv4h/Whats-App-Image-2026-01-03-at-20-07-23-(4).jpg",
        "https://i.postimg.cc/rFq3QKbH/Whats-App-Image-2026-01-03-at-20-07-23-(5).jpg",
        "https://i.postimg.cc/VLzpDdTV/Whats-App-Image-2026-01-03-at-20-07-23-(6).jpg",
        "https://i.postimg.cc/15y2JfTY/Whats-App-Image-2026-01-03-at-20-07-23-(7).jpg",
        "https://i.postimg.cc/L6mwNn7Q/Whats-App-Image-2026-01-03-at-20-07-23-(8).jpg",
        "https://i.postimg.cc/SNm3DJ5g/Whats-App-Image-2026-01-03-at-20-07-23-(9).jpg"
      ],
      achievements: [
        'projects.studentSystem.achievement1',
        'projects.studentSystem.achievement2',
        'projects.studentSystem.achievement3',
        'projects.studentSystem.achievement4'
      ]
    },
    {
      title: 'Sistema de Gestión Documental',
      description: 'projects.docSystem.desc',
      role: 'projects.docSystem.role',
      type: 'projects.types.enterprise',
      severity: 'info',
      technologies: ['Angular', 'NestJS', 'MySQL', 'Docker'],
      company: 'Municipalidad Distrital de José Crespo y Castillo',
      images: [
        'https://i.postimg.cc/prr8LQr4/image.png',
        'https://i.postimg.cc/1R7wYd72/image.png',
      ],
      achievements: [
        'projects.docSystem.achievement1',
        'projects.docSystem.achievement2',
        'projects.docSystem.achievement3'
      ]
    }
  ]);
}
