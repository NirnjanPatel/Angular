import { Component } from '@angular/core';
@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.scss'],
})
export class HeroParentComponent {
  public HEROES: any[] = ['Dr. IQ', 'Magneta', 'Bombasto'];

  heroes = this.HEROES;
  master = 'Master';
}
