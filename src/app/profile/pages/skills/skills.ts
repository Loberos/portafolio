import { Component, signal } from '@angular/core';
import { PrimeImportsModule } from '../../../primeng/config/primeng.imports';
import { TranslatePipe } from '@ngx-translate/core';

interface SkillNode {
  id: string;
  name: string;
  icon: string;
  unlocked: boolean;
  children?: string[];
}

interface SkillBranch {
  id: string;
  name: string;
  nameKey: string;
  color: string;
  icon: string;
  skills: SkillNode[];
}

interface Tool {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  imports: [PrimeImportsModule, TranslatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {

  skillBranches = signal<SkillBranch[]>([
    {
      id: 'frontend',
      name: 'Frontend',
      nameKey: 'skills.branches.frontend',
      color: '#f43f5e',
      icon: 'pi pi-desktop',
      skills: [
        { id: 'html', name: 'HTML', icon: 'pi pi-code', unlocked: true },
        { id: 'css', name: 'CSS', icon: 'pi pi-palette', unlocked: true, children: ['html'] },
        { id: 'js', name: 'JavaScript', icon: 'pi pi-bolt', unlocked: true, children: ['html', 'css'] },
        { id: 'ts', name: 'TypeScript', icon: 'pi pi-hashtag', unlocked: true, children: ['js'] },
        { id: 'angular', name: 'Angular', icon: 'pi pi-box', unlocked: true, children: ['ts'] },
        { id: 'primeng', name: 'PrimeNG', icon: 'pi pi-prime', unlocked: true, children: ['angular'] },
        { id: 'tailwind', name: 'Tailwind', icon: 'pi pi-sparkles', unlocked: true, children: ['css'] },
      ]
    },
    {
      id: 'backend',
      name: 'Backend',
      nameKey: 'skills.branches.backend',
      color: '#22c55e',
      icon: 'pi pi-server',
      skills: [
        { id: 'java', name: 'Java', icon: 'pi pi-code', unlocked: true },
        { id: 'spring', name: 'Spring Boot', icon: 'pi pi-bolt', unlocked: true, children: ['java'] },
        { id: 'nodejs', name: 'Node.js', icon: 'pi pi-circle', unlocked: true, children: ['js'] },
        { id: 'nestjs', name: 'NestJS', icon: 'pi pi-box', unlocked: true, children: ['nodejs', 'ts'] },
        { id: 'rest', name: 'REST APIs', icon: 'pi pi-link', unlocked: true, children: ['spring', 'nestjs'] },
        { id: 'jwt', name: 'JWT Auth', icon: 'pi pi-shield', unlocked: true, children: ['rest'] },
      ]
    },
    {
      id: 'database',
      name: 'Database',
      nameKey: 'skills.branches.database',
      color: '#3b82f6',
      icon: 'pi pi-database',
      skills: [
        { id: 'sql', name: 'SQL', icon: 'pi pi-table', unlocked: true },
        { id: 'mysql', name: 'MySQL', icon: 'pi pi-database', unlocked: true, children: ['sql'] },
        { id: 'postgres', name: 'PostgreSQL', icon: 'pi pi-database', unlocked: true, children: ['sql'] },
        { id: 'mongodb', name: 'MongoDB', icon: 'pi pi-server', unlocked: false, children: ['sql'] },
        { id: 'orm', name: 'TypeORM', icon: 'pi pi-sitemap', unlocked: true, children: ['postgres', 'mysql'] },
      ]
    },
    {
      id: 'devops',
      name: 'DevOps',
      nameKey: 'skills.branches.devops',
      color: '#f59e0b',
      icon: 'pi pi-cog',
      skills: [
        { id: 'git', name: 'Git', icon: 'pi pi-github', unlocked: true },
        { id: 'github', name: 'GitHub', icon: 'pi pi-github', unlocked: true, children: ['git'] },
        { id: 'docker', name: 'Docker', icon: 'pi pi-box', unlocked: true, children: ['git'] },
        { id: 'ci', name: 'CI/CD', icon: 'pi pi-sync', unlocked: false, children: ['docker', 'github'] },
      ]
    }
  ]);

  tools = signal<Tool[]>([
    { name: 'VS Code', icon: 'pi pi-microsoft' },
    { name: 'IntelliJ IDEA', icon: 'pi pi-code' },
    { name: 'Postman', icon: 'pi pi-send' },
    { name: 'Figma', icon: 'pi pi-palette' },
    { name: 'DBeaver', icon: 'pi pi-database' },
    { name: 'Terminal', icon: 'pi pi-desktop' }
  ]);

  methodologies = signal<string[]>([
    'Domain-Driven Design',
    'SOLID',
    'Clean Architecture',
    'Scrum',
    'Kanban',
    'REST API Design'
  ]);

  getUnlockedCount(branch: SkillBranch): number {
    return branch.skills.filter(s => s.unlocked).length;
  }

  getTotalCount(branch: SkillBranch): number {
    return branch.skills.length;
  }
}
