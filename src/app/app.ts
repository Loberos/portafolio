import { Component, signal } from '@angular/core';
import {PrimeImportsModule} from './primeng/config/primeng.imports';
import {Navbar} from './profile/components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [PrimeImportsModule, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portafolio-randy');
}
