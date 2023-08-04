import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  public courses = [
    {
      id: 101,
      name: 'JavaScript for beginners',
      author: 'John Heikela',
      duration: 48,
      type: 'Free',
      price: 0.0,
      ratings: 3.5,
      image:
        'https://cdn.pixabay.com/photo/2017/04/19/13/16/computer-2242264_640.jpg',
      description:
        'In this course you will learn the fundamentals of JavaScript. This course is purely designed for be',
    },
    {
      id: 102,
      name: 'Angular for beginners',
      author: 'Mark Vought',
      duration: 28,
      type: 'Premium',
      price: 129.0,
      ratings: 4.5,
      image:
        'https://cdn.pixabay.com/photo/2017/04/19/13/16/computer-2242264_640.jpg',
      description:
        'In this course you will learn the fundamentals of Angular framework. This course is purely designed',
    },
    {
      id: 103,
      name: 'React for beginners',
      author: 'Steve Smith',
      duration: 18.5,
      type: 'Free',
      price: 0.0,
      ratings: 4.0,
      image:
        'https://cdn.pixabay.com/photo/2017/04/19/13/16/computer-2242264_640.jpg',
      description:
        'In this course you will learn the fundamentals of React. This course is purely designed for beginner',
    },
    {
      id: 104,
      name: 'Advance Angular Course',
      author: 'Steve Smith',
      duration: 19.5,
      type: 'Premium',
      price: 145.5,
      ratings: 4.8,
      image:
        'https://cdn.pixabay.com/photo/2017/04/19/13/16/computer-2242264_640.jpg',
      description:
        'In this course you will learn all the concepts of Angular from basic to advance. This course will',
    },
    {
      id: 105,
      name: 'Advance Angular Course',
      author: 'Steve Smith',
      duration: 19.5,
      type: 'Free',
      price: 145.5,
      ratings: 4.8,
      image:
        'https://cdn.pixabay.com/photo/2017/04/19/13/16/computer-2242264_640.jpg',
      description:
        'In this course you will learn all the concepts of Angular from basic to advance. This course will',
    },
    {
      id: 106,
      name: 'Advance Angular Course',
      author: 'Steve Smith',
      duration: 19.5,
      type: 'Free',
      price: 145.5,
      ratings: 4.8,
      image:
        'https://cdn.pixabay.com/photo/2017/04/19/13/16/computer-2242264_640.jpg',
      description:
        'In this course you will learn all the concepts of Angular from basic to advance. This course will',
    },
    {
      id: 107,
      name: 'Advance Angular Course',
      author: 'Steve Smith',
      duration: 19.5,
      type: 'Premium',
      price: 145.5,
      ratings: 4.8,
      image:
        'https://cdn.pixabay.com/photo/2017/04/19/13/16/computer-2242264_640.jpg',
      description:
        'In this course you will learn all the concepts of Angular from basic to advance. This course will',
    },
    {
      id: 108,
      name: 'Advance Angular Course',
      author: 'Steve Smith',
      duration: 19.5,
      type: 'Premium',
      price: 145.5,
      ratings: 4.8,
      image:
        'https://cdn.pixabay.com/photo/2017/04/19/13/16/computer-2242264_640.jpg',
      description:
        'In this course you will learn all the concepts of Angular from basic to advance. This course will',
    },
    {
      id: 109,
      name: 'Advance Angular Course',
      author: 'Steve Smith',
      duration: 19.5,
      type: 'Free',
      price: 145.5,
      ratings: 4.8,
      image:
        'https://cdn.pixabay.com/photo/2017/04/19/13/16/computer-2242264_640.jpg',
      description:
        'In this course you will learn all the concepts of Angular from basic to advance. This course will',
    },
    {
      id: 110,
      name: 'Advance Angular Course',
      author: 'Steve Smith',
      duration: 19.5,
      type: 'Free',
      price: 145.5,
      ratings: 4.8,
      image:
        'https://cdn.pixabay.com/photo/2017/04/19/13/16/computer-2242264_640.jpg',
      description:
        'In this course you will learn all the concepts of Angular from basic to advance. This course will',
    },
  ];

  public getTotalCourses() {
    return this.courses.length;
  }
  public getTotalFreeCourses() {
    return this.courses.filter((course) => course.type === 'Free').length;
  }
  public getTotalPremiumCourses() {
    return this.courses.filter((course) => course.type === 'Premium').length;
  }

  public courseCountRadioButton: string = 'All';

  public onRadioButtonChange(data: string): void {
    console.log('data ---> ', data);
    this.courseCountRadioButton = data;
  }

  public searchText: string = '';

  public onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log('this.searchText --- > ', this.searchText);
  }
}
