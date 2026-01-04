import { Component, OnInit, OnDestroy, signal, inject, PLATFORM_ID, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PrimeImportsModule } from '../../../primeng/config/primeng.imports';
import { RouterLink, RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';

interface NavbarItem {
  label: string;
  icon: string;
  section: string;
}

interface Language {
  code: string;
  name: string;
  flag: string;
}

@Component({
  selector: 'app-navbar',
  imports: [PrimeImportsModule, RouterOutlet, TranslatePipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit, OnDestroy {
  private translate = inject(TranslateService);
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  activeItem = signal<number>(0);
  isDarkMode = signal(false);
  currentLang = signal<string>('es');
  isLandingPage = signal(true);
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  languages = signal<Language[]>([
    { code: 'es', name: 'Español', flag: '🇲🇽' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ]);

  menuItems = signal<NavbarItem[]>([
    { label: 'nav.home', icon: 'pi pi-home', section: 'hero' },
    { label: 'nav.about', icon: 'pi pi-user', section: 'about' },
    { label: 'nav.projects', icon: 'pi pi-briefcase', section: 'projects' },
    { label: 'nav.skills', icon: 'pi pi-code', section: 'skills' },
    { label: 'nav.education', icon: 'pi pi-graduation-cap', section: 'education' },
    { label: 'nav.contact', icon: 'pi pi-envelope', section: 'contact' }
  ]);

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled.set(window.scrollY > 50);
      this.updateActiveSection();
    }
  }

  @HostListener('window:resize', [])
  onWindowResize(): void {
    if (isPlatformBrowser(this.platformId) && window.innerWidth > 1024) {
      this.closeMobileMenu();
    }
  }

  ngOnInit(): void {
    this.currentLang.set(this.translate.currentLang || 'es');

    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        this.isDarkMode.set(true);
        document.querySelector('html')?.classList.add('my-app-dark');
      } else {
        this.isDarkMode.set(false);
        document.querySelector('html')?.classList.remove('my-app-dark');
      }

      window.addEventListener('sectionChange', this.handleSectionChange.bind(this));

      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe((event: NavigationEnd) => {
        this.isLandingPage.set(event.url === '/' || event.url === '/home' || event.url.startsWith('/#'));
      });

      this.isLandingPage.set(
        this.router.url === '/' ||
        this.router.url === '/home' ||
        this.router.url.startsWith('/#')
      );
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('sectionChange', this.handleSectionChange.bind(this));
    }
  }

  private handleSectionChange(event: Event): void {
    const customEvent = event as CustomEvent;
    const sectionId = customEvent.detail;
    const index = this.menuItems().findIndex(item => item.section === sectionId);
    if (index !== -1) {
      this.activeItem.set(index);
    }
  }

  private updateActiveSection(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const sections = this.menuItems().map(item => item.section);
    const scrollPosition = window.scrollY + 150;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.querySelector(`[data-section="${sections[i]}"]`) as HTMLElement;
      if (section && section.offsetTop <= scrollPosition) {
        this.activeItem.set(i);
        break;
      }
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.set(!this.isMobileMenuOpen());

    if (isPlatformBrowser(this.platformId)) {
      if (this.isMobileMenuOpen()) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }

  scrollToSection(index: number): void {
    this.activeItem.set(index);
    const sectionId = this.menuItems()[index].section;

    if (isPlatformBrowser(this.platformId)) {
      if (!this.isLandingPage()) {
        this.router.navigate(['/home']).then(() => {
          setTimeout(() => this.performScroll(sectionId), 100);
        });
      } else {
        this.performScroll(sectionId);
      }
    }
  }

  private performScroll(sectionId: string): void {
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

  toggleDarkMode(): void {
    if (isPlatformBrowser(this.platformId)) {
      const element = document.querySelector('html');
      element?.classList.toggle('my-app-dark');
      const newDarkMode = !this.isDarkMode();
      this.isDarkMode.set(newDarkMode);
      localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
    }
  }

  switchLanguage(langCode: string): void {
    this.translate.use(langCode);
    this.currentLang.set(langCode);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('language', langCode);
    }
  }

  getCurrentFlag(): string {
    const lang = this.languages().find(l => l.code === this.currentLang());
    return lang?.flag || '🇲🇽';
  }

  getOtherLanguage(): Language {
    return this.languages().find(l => l.code !== this.currentLang()) || this.languages()[0];
  }
}
