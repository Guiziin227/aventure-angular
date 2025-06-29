import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { provideHttpClient, withFetch } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LandingpageComponent } from './landingpage/landingpage.component';
import {provideOAuthClient} from 'angular-oauth2-oidc';

@NgModule({
  declarations: [AppComponent, LandingpageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideHttpClient(withFetch()), provideOAuthClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
