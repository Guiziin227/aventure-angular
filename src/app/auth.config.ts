import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  redirectUri: window.location.origin,
  clientId: "676807437019-qh1tbee2m15rqdrkq2uac1nqcd61n86i.apps.googleusercontent.com",
  scope: 'openid profile email',
  strictDiscoveryDocumentValidation: false
}
