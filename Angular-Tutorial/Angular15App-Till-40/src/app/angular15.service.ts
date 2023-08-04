import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Angular15Service {
  constructor(private http: HttpClient) {}
  DisplayMessage() {
    return 'Angular service works';
  }
  GetStudentDetails() {
    return this.http.get('../../assets/StudentRecords.json');
  }
}
