import {
  AfterViewInit,
  Component,
  Inject,
  PLATFORM_ID
} from '@angular/core';

import {
  CommonModule,
  isPlatformBrowser
} from '@angular/common';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements AfterViewInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}


  ngAfterViewInit(): void {

    // Run only in browser
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const elements =
      document.querySelectorAll('.reveal');

    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              entry.target.classList.add('show');

              observer.unobserve(entry.target);
            }

          });

        },
        {
          threshold: 0.12
        }
      );

    elements.forEach((element) => {
      observer.observe(element);
    });
  }
}