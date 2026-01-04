import { Component, signal } from '@angular/core';
import { PrimeImportsModule } from '../../../primeng/config/primeng.imports';
import { TranslatePipe } from '@ngx-translate/core';

interface TimelineItem {
  type: 'education' | 'experience';
  title: string;
  institution: string;
  location: string;
  date: string;
  description?: string;
  achievements?: string[];
  technologies?: string[];
}

@Component({
  selector: 'app-education',
  imports: [PrimeImportsModule, TranslatePipe],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  timeline = signal<TimelineItem[]>([
    {
      type: 'education',
      title: 'Ingeniería de Software',
      institution: 'Universidad Peruana de Ciencias Aplicadas (UPC)',
      location: 'Lima, Perú',
      date: 'Ago 2021 - Presente',
      description: 'education.upc.desc'
    },
    {
      type: 'experience',
      title: 'Desarrollador FullStack',
      institution: 'LAZARUS TECHNOLOGIES E.I.R.L.',
      location: 'Lima, Perú',
      date: 'Oct 2025 - Dic 2025',
      achievements: [
        'education.lazarus.achievement1',
        'education.lazarus.achievement2',
        'education.lazarus.achievement3',
        'education.lazarus.achievement4'
      ],
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'DDD']
    },
    {
      type: 'experience',
      title: 'Practicante de Ingeniería de Software',
      institution: 'Municipalidad Distrital de José Crespo y Castillo',
      location: 'Aucayacu, Perú',
      date: 'Ene 2025 - Feb 2025',
      achievements: [
        'education.muni.achievement1',
        'education.muni.achievement2',
        'education.muni.achievement3',
        'education.muni.achievement4'
      ],
      technologies: ['Angular', 'NestJS', 'MySQL']
    }
  ]);
}
