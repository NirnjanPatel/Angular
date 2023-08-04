import { Component, OnInit } from '@angular/core';
import { AdItem } from '../hero-job-ad/ad.item';
import { AdService } from 'src/app/services/ad.service';

@Component({
  selector: 'app-hero-job-profile',
  templateUrl: './hero-job-profile.component.html',
  styleUrls: ['./hero-job-profile.component.scss'],
})
export class HeroJobProfileComponent implements OnInit {
  ads: AdItem[] = [];

  constructor(private adService: AdService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}
