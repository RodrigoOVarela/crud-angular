import { Component, OnInit } from '@angular/core';

import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {

  public courses: Course[] = [
    { id: "1", name: "Angular", category: "front-end" },
    { id: "2", name: "Angular", category: "front-end" },
  ];
  public displayedColumns = ['name', 'category'];

  constructor() { }

  ngOnInit(): void {
  }

}
