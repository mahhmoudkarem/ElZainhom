import {
  AfterViewInit,
  Component
} from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact implements AfterViewInit {

  name = '';
  phone = '';
  job = '';
  message = '';

  whatsappNumber = '201099111174';

  phoneNumber1 = '01099111174';
  phoneNumber2 = '01099111175';

  whatsappChannel =
    'https://whatsapp.com/channel/0029VbDIN4FLtOj6IGtdJo3Q';

  telegramChannel =
    'https://t.me/Elzeinhom';

  facebookPage =
    'https://www.facebook.com/share/1V8T5KfWYR/?mibextid=wwXIfr';

  tiktokPage =
    'https://www.tiktok.com/@elzeinhom1?_r=1&_t=ZS-94xUXdpn1ro';

  website =
    'https://kwekly.com/Ahmedzeinhom';


  // ================================
  // Scroll Reveal Animation
  // ================================

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


  // ================================
  // Message
  // ================================

  getMessage(): string {

    return `
رسالة جديدة من موقع الزينهم للدواجن

الاسم:
${this.name}

رقم الموبايل:
${this.phone}

الوظيفة:
${this.job}

الرسالة:
${this.message}
    `.trim();
  }


  // ================================
  // Validation
  // ================================

  validateForm(): boolean {

    if (
      !this.name.trim() ||
      !this.phone.trim() ||
      !this.job ||
      !this.message.trim()
    ) {

      alert('من فضلك أكمل جميع البيانات');

      return false;
    }

    return true;
  }


  // ================================
  // WhatsApp
  // ================================

  sendWhatsApp(): void {

    if (!this.validateForm()) {
      return;
    }

    const message =
      encodeURIComponent(this.getMessage());

    const url =
      `https://wa.me/${this.whatsappNumber}?text=${message}`;

    window.open(url, '_blank');
  }


  // ================================
  // Telegram
  // ================================

  sendTelegram(): void {

    if (!this.validateForm()) {
      return;
    }

    const message =
      encodeURIComponent(this.getMessage());

    const url =
      `https://t.me/share/url?url=&text=${message}`;

    window.open(url, '_blank');
  }


  // ================================
  // WhatsApp Channel
  // ================================

  openWhatsAppChannel(): void {

    window.open(
      this.whatsappChannel,
      '_blank'
    );
  }


  // ================================
  // Telegram Channel
  // ================================

  openTelegram(): void {

    window.open(
      this.telegramChannel,
      '_blank'
    );
  }


  // ================================
  // Phone 1
  // ================================

  callPhone1(): void {

    window.location.href =
      `tel:${this.phoneNumber1}`;
  }


  // ================================
  // Phone 2
  // ================================

  callPhone2(): void {

    window.location.href =
      `tel:${this.phoneNumber2}`;
  }

}