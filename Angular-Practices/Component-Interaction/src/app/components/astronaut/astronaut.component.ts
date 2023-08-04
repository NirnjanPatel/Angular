import { Component, Input, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { MissionService } from 'src/app/services/mission.service';

@Component({
  selector: 'app-astronaut',
  templateUrl: `./astronaut.component.html`,
})
export class AstronautComponent implements OnDestroy {
  @Input() astronaut = '';
  mission = '<no mission announced>';
  confirmed = false;
  announced = false;
  subscription: Subscription;

  constructor(private missionService: MissionService) {
    this.subscription = missionService.missionAnnounced$.subscribe(
      (mission) => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
      }
    );
  }

  confirm() {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
