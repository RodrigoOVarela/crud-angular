import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';

import { Character } from './../model/character';
import { Course } from './../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private readonly apiUrl = 'https://ggateway.marvel.com:443/v1/public/characters?limit=100&ts=1&apikey=55788f172342a9d35da3427c80eea162&hash=cff54bba4a9ff436b7541cbb693c7eca';

  constructor(private httpClient: HttpClient) { }

  getAll(): Course[] {
    return [
      { id: "1", name: "Angular", category: "front-end" },
      { id: "2", name: "Angular", category: "front-end" },
    ];
  }

  public getMarvelCharacters() {
    return this.httpClient.get<Character[]>(this.apiUrl);
  }

  //Uso do tap para filtrar os dados
  public getMarvelCharactersTap() {
    return this.httpClient.get<Character[]>(this.apiUrl)
      .pipe(
        //take = após resposta do servidor finaliza inscrição na origem de dados
        // take(1),

        //fist = interessado apenas na primeira resposta do servidor
        first(),
        tap(characters => console.log("getMarvelCharacters with tap", characters))
      );
  }
}
