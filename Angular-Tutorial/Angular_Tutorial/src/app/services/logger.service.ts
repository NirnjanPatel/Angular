import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  log(msg: any) {
    throw new Error('Method not implemented.');
  }

  writeCount(count: number) {
    console.warn(count);
  }

}
