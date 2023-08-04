import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AdItem } from '../hero-job-ad/ad.item';
import { AdDirective } from 'src/app/directives/ad.directive';
import { AdComponent } from '../hero-job-ad/ad.component';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.scss'],
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[] = [];

  currentAdIndex = -1;

  @ViewChild(AdDirective, { static: true }) adHost!: AdDirective;

  private clearTimer: VoidFunction | undefined;

  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy(): void {
    this.clearTimer?.();
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AdComponent>(
      adItem.component
    );
    componentRef.instance.data = adItem.data;
  }

  getAds() {
    const interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
    this.clearTimer = () => clearInterval(interval);
  }
}
