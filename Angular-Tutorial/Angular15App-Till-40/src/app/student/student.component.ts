import { Component } from '@angular/core';
import { Angular15Service } from '../angular15.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  StudentInfo: any = [];
  constructor(private service: Angular15Service) {}
  ngOnInit() {
    this.service.GetStudentDetails().subscribe((data) => {
      this.StudentInfo = data;
    });
  }
}
