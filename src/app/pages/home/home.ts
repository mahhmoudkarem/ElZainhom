import {
  AfterViewInit,
  Component
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements AfterViewInit {

  whatsappNumber = '201099111174';

  whatsappChannel =
    'https://whatsapp.com/channel/0029VbDIN4FLtOj6IGtdJo3Q';

  telegramChannel =
    'https://t.me/Elzeinhom';


  ngAfterViewInit(): void {

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