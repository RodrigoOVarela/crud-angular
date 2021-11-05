import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Character } from '../model/character';
import { CoursesService } from './../services/courses.service';

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
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
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
        // this.openSnackBar();
        this.openDialog('Ocorreu um erro no servidor, tente novamente mais tarde');
        console.log(err);
      });
  }

  private openSnackBar() {
    this.snackBar.open("Ocorreu um erro no servidor, tente novamente mais tarde", undefined, {
      duration: 4000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });
  }

  private openDialog(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }
}
