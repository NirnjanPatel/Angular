import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-child',
  templateUrl: './hero-child.component.html',
  styleUrls: ['./hero-child.component.scss'],
})
export class HeroChildComponent {
  heroes: any[];

  constructor() {
    this.heroes = Hero.HEROES;
  }

  @Input() hero!: Hero;
  @Input('master') masterName = '';
}
