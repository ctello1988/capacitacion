import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-in',
  standalone: true,
  imports: [],
  templateUrl: './sign-in.component.html',
})
export default class SignInComponent {
  router = inject(Router);

  login(): void {
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('canAccessToMenu', '0');
    this.router.navigateByUrl('/dashboard');
  }
}
