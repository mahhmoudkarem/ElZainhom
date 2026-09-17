import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserCreate } from '../../Shared/Interfaces/user-create';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './welcome.html'
})
export class Welcome {

  user: UserCreate = {
    fullName: '',
    phone: '',
    job: ''
  };

  loading = false;
  errorMessage = '';

  constructor(
    private router: Router
  ) {}

  submit(): void {

    this.errorMessage = '';

    // التأكد إن الاسم موجود
    if (!this.user.fullName.trim()) {
      this.errorMessage = 'من فضلك أدخل الاسم بالكامل';
      return;
    }

    // التأكد إن رقم الهاتف موجود
    if (!this.user.phone.trim()) {
      this.errorMessage = 'من فضلك أدخل رقم الهاتف';
      return;
    }

    // التأكد إن الوظيفة موجودة
    if (!this.user.job.trim()) {
      this.errorMessage = 'من فضلك أدخل الوظيفة';
      return;
    }

    // Loading بسيط للشكل فقط
    this.loading = true;

    setTimeout(() => {

      // تسجيل دخول المستخدم محليًا مؤقتًا
      localStorage.setItem(
        'alzainhom_user_registered',
        'true'
      );

      // الانتقال للـ Home
      this.router.navigate(['/home']);

    }, 300);
  }
}