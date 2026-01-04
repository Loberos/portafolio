import {AfterViewInit, Component, ElementRef, inject, OnDestroy, PLATFORM_ID, signal, ViewChild} from '@angular/core';
import {About} from '../../pages/about/about';
import {Contact} from '../../pages/contact/contact';
import {Education} from '../../pages/education/education';
import {Home} from '../../pages/home/home';
import {Projects} from '../../pages/projects/projects';
import {ScrollTop} from 'primeng/scrolltop';
import {Skills} from '../../pages/skills/skills';
import {isPlatformBrowser} from '@angular/common';
import {Footer} from '../../components/footer/footer';

@Component({
  selector: 'app-randy',
  imports: [
    About,
    Contact,
    Education,
    Home,
    Projects,
    ScrollTop,
    Skills,
    Footer
  ],
  templateUrl: './randy.html',
  styleUrl: './randy.css',
})
export class Randy implements AfterViewInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private observer: IntersectionObserver | null = null;

  @ViewChild('heroSection') heroSection!: ElementRef;
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('projectsSection') projectsSection!: ElementRef;
  @ViewChild('skillsSection') skillsSection!: ElementRef;
  @ViewChild('educationSection') educationSection!: ElementRef;
  @ViewChild('contactSection') contactSection!: ElementRef;

  currentSection = signal<string>('hero');

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.setupIntersectionObserver();
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver(): void {
    const options = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section');
          if (sectionId) {
            this.currentSection.set(sectionId);
            window.dispatchEvent(new CustomEvent('sectionChange', { detail: sectionId }));
          }
        }
      });
    }, options);

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => this.observer?.observe(section));
  }

  scrollToSection(sectionId: string): void {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}








