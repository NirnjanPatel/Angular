import { Component } from '@angular/core';
import { StudentComponent } from './student/student.component';
import { StudentStandaloneComponent } from './student-standalone/student-standalone.component';
import { Route, Router } from '@angular/router';
import { Angular15Service } from './angular15.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // standalone: true,
  styleUrls: ['./app.component.css'],
  // imports: [StudentStandaloneComponent],
})
export class AppComponent {
  // value: any = 20;
  // value1: any = 20;
  // bool: Boolean = true;
  title = 'Angular15App';
  // visible = true;
  // selected = 'option2';

  // IsVisible = true;

  // color = 'option1 ';
  // constructor() {}
  // ngOnInit() {}
  // mouseHoverEvent() {
  //   console.log('Hover');
  // }
  // onChange(args: any) {
  //   this.IsVisible = args;
  // }

  // public color = '';
  // SetColor(colorValue: any) {
  //   this.color = colorValue.target.value;
  // }

  // StudentDetails: any[] = [];
  // constructor() {
  //   this.StudentDetails = [
  //     {
  //       Name: 'Balram',
  //       Age: 29,
  //       Gender: 'Male',
  //     },
  //     {
  //       Name: 'Pallavi',
  //       Age: 26,
  //       Gender: 'Female',
  //     },
  //     {
  //       Name: 'Suraj',
  //       Age: 26,
  //       Gender: 'Male',
  //     },
  //   ];
  // }

  // GetMoreStData(): void {
  //   this.StudentDetails = [
  //     {
  //       Name: 'Balram',
  //       Age: 29,
  //       Gender: 'Male',
  //     },
  //     {
  //       Name: 'Pallavi',
  //       Age: 26,
  //       Gender: 'Female',
  //     },
  //     {
  //       Name: 'Suraj',
  //       Age: 26,
  //       Gender: 'Male',
  //     },
  //     {
  //       Name: 'Nikhil',
  //       Age: 33,
  //       Gender: 'Male',
  //     },
  //     {
  //       Name: 'Dhruv',
  //       Age: 31,
  //       Gender: 'Male',
  //     },
  //   ];
  // }

  TrackByStdName(index: number, student: any): string {
    return student.Name;
  }

  GetAge(Age: number) {
    let val = Age < 27 ? 'under27' : 'above27';

    switch (val) {
      case 'under27': {
        return 'green';
      }
      case 'above27': {
        return 'red';
      }
    }
    return '';
  }

  GetCssClass(input: string) {
    let classType;
    if (input == 'main') {
      classType = {
        color: true,
      };
    } else {
      classType = {
        color2: true,
      };
    }
    return classType;
  }

  title1 = 'Property Binding';
  anyValue: any = 234;
  Name: any = 'Pallavi';
  Age: any = 26;
  Gender: any = 'Female';
  colspan: number = 2;

  ShowData() {
    alert('This is event binding');
  }

  sum: number = 0;
  ShowAdd() {
    let a = 10;
    let b = 20;
    return (this.sum = a + b);
  }

  SetColor(colorValue: any) {
    alert(colorValue.target.value);
  }
  name1: any = 'Two way binding';
  name2: any = 'Two way data binding';

  StudentInfo: any[] = [];
  // constructor() {
  //   this.StudentInfo = [
  //     {
  //       Name: 'Balram',
  //       Age: 29,
  //       Gender: 'Male',
  //     },
  //     {
  //       Name: 'Pallavi',
  //       Age: 26,
  //       Gender: 'Female',
  //     },
  //     {
  //       Name: 'Suraj',
  //       Age: 26,
  //       Gender: 'Male',
  //     },
  //   ];
  // }

  DOB = new Date('10/12/2001');
  Salary = 80000;

  NumberArray: any[] = [];
  DisplayMsg: string = '';
  constructor(private router: Router, private service: Angular15Service) {
    this.NumberArray = [
      {
        num1: 10,
        num2: 20,
      },
      {
        num1: 30,
        num2: 40,
      },
      {
        num1: 50,
        num2: 60,
      },
    ];
  }

  ngOnInit() {
    this.DisplayMsg = this.service.DisplayMessage();
  }

  DynamicRouter(linkName: string) {
    if (linkName == 'std') {
      this.router.navigate(['/std']);
    } else {
      this.router.navigate(['tcr']);
    }
  }
}
