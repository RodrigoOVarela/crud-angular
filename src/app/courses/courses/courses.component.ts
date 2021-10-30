import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';

import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {

  public courses: Course[] = []
  public displayedColumns = ['name', 'category'];

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.courses = this.coursesService.getAll();
  }

}
