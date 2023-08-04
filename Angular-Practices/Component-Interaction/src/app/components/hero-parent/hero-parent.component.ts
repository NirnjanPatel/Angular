import { Component } from '@angular/core';
import { HEROES } from '../hero';

@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.scss'],
})
export class HeroParentComponent {
  constructor() {}
  heroes: any[] = HEROES;
  master = 'master';
}
