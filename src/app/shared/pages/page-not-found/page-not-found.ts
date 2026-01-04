import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {PrimeImportsModule} from '../../../../core/config/primeimports';
import {RouterLink} from '@angular/router';

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
  backhome: string= "/dashboard";
}
