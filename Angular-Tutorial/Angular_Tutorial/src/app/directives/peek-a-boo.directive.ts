import { Directive, OnInit } from '@angular/core';
import { LoggerService } from '../services/logger.service';

@Directive({
  selector: '[appPeekABoo]'
})
export class PeekABooDirective implements OnInit {

  constructor(private logger: LoggerService) { }
  ngOnInit(): void {
    this.logIt('OnInit');
  }

  logIt(msg: string) {
    // this.logger.log(`#${} ${msg}`)
  }

}
