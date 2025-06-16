import { Injectable, inject, signal } from '@angular/core';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthgoogleService {

  private oauthservice: OAuthService = inject(OAuthService);
  private router: Router = inject(Router);

  profile = signal<any>(null);

  constructor() {
    this.initConfiguration();
  }

  initConfiguration() {
    this.oauthservice.configure(authConfig);
    this.oauthservice.setupAutomaticSilentRefresh();
    this.oauthservice.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (this.oauthservice.hasValidAccessToken()) {
        this.profile.set(this.oauthservice.getIdentityClaims());
      }
    });
  }

  login() {
    this.oauthservice.initImplicitFlow();
  }

  logout() {
    this.oauthservice.revokeTokenAndLogout();
    this.oauthservice.logOut();
    this.profile.set(null);
    this.router.navigate(['']);
  }

}
