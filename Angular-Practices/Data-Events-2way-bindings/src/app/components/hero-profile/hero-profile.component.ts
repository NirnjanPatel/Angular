import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.scss'],
})
export class HeroProfileComponent {
  @Input() data: any;
}
