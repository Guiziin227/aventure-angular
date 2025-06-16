import { Component } from '@angular/core';
import {Profile} from './profile.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

  profile: Profile | undefined;

  constructor(private router: Router) {
  }

  navegation(){
    this.router.navigate(['/paginas/galeria']);
  }

  logarComGoogle() {
  }

  isLoggedIn(): boolean{
    return !!this.profile;
  }
}
