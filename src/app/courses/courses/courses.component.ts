import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Character } from '../model/character';
import { Course } from '../model/course';
import { CoursesService } from './../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {
  public loadedGrid: boolean = false;
  // public courses: Course[] = []
  public characters: Character[] = [];
  // public charactersWithObservable: Observable<Character[]>;
  public displayedColumns = ['name', 'description'];

  constructor(
    private coursesService: CoursesService,
    private snackBar: MatSnackBar) {
    // this.characters = this.coursesService.getMarvelCharactersTap();
  }

  ngOnInit(): void {
    this.coursesService.getMarvelCharacters()
      .subscribe((response: any) => {
        this.characters = response.data.results;
        this.loadedGrid = !this.loadedGrid;
        console.log("getMarvelCharacters without tap", response.data.results);
      }, err => {
        this.loadedGrid = !this.loadedGrid;
        this.snackBar.open("Ocorreu um erro no servidor, tente novamente mais tarde", undefined, {
          duration: 4000,
          horizontalPosition: 'right',
          verticalPosition: 'bottom',
        });
        console.log(err);
      });
  }
}
