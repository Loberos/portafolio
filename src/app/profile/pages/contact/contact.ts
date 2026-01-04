import { Component, signal } from '@angular/core';
import { PrimeImportsModule } from '../../../primeng/config/primeng.imports';
import { TranslatePipe } from '@ngx-translate/core';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  imports: [PrimeImportsModule, TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  formData: FormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit(): void {
    const { name, email, subject, message } = this.formData;
    const mailtoLink = `mailto:rengiforandy11@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
  }
}
