import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie-consent',
  templateUrl: './cookie-consent.component.html',
  styleUrl: './cookie-consent.component.css',
})
export class CookieConsentComponent {
  showCookieConsent: boolean = true;

  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {
    this.checkCookieConsent();
  }

  checkCookieConsent(): void {
    const isCookieAccepted = this.cookieService.get('cookieAccepted');
    this.showCookieConsent = !isCookieAccepted;
  }

  acceptCookies(): void {
    this.cookieService.set('cookieAccepted', 'true', 1); // Salvează starea pentru 1 zi
    this.showCookieConsent = false;
  }
}
