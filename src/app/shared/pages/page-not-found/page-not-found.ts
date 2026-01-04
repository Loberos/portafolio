import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {PrimeImportsModule} from '../../../primeng/config/primeng.imports';

@Component({
  selector: 'app-page-not-found',
  imports: [
    PrimeImportsModule,
    RouterLink,
  ],
  templateUrl: './page-not-found.html',
  styleUrl: './page-not-found.css',
})
export class PageNotFound {
  backhome: string= "/home";
}
