
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlashcardsService {

  cardCache: { [id: number]: Flashcard } = {};
  // userCard: { [card: [Flashcard]]} = {};
  // tslint:disable-next-line:no-inferrable-types
  id: number = 1;

  constructor(private http: HttpClient) { }

  getFlashcards(): Observable<Flashcard[]> {
    return this.http.get<Flashcard[]>(`http://localhost:3000/flashcards`);
  }
  getFlashcard(): Observable<Flashcard> {
    return this.http.get<Flashcard>(`http://localhost:3000/flashcards/${this.id}`);
  }
  addCard(flashcard: Flashcard): Observable<any> {
    const cardCache = this.cardCache[flashcard.id];

    return this.http.post<Flashcard>(`http://localhost:3000/flashcards/`, flashcard).pipe(
      tap(_ => this.cardCache[flashcard.id]),
    );
  }
  pass(flashcard: Flashcard): Observable<any> {
    console.log(flashcard);
    return this.http.put(`http://localhost:3000/flashcards/${flashcard.id}`, flashcard).pipe(
      tap(val => {
        // this.cardCache[flashcard.id].pass = flashcard.pass;
      })
    );
  }
  deleteCard(flashcard: Flashcard): Observable<any> {
    return this.http.delete(`http://localhost:3000/flashcards/${flashcard.id}`).pipe(
      tap(_ => delete this.cardCache[flashcard.id]));
  }
}


export class Flashcard {
  id: number;
  question: string;
  ans: string;
  body: string;
  front: boolean;
  pass: boolean;
  show: boolean;
  type: string;

  constructor() {
    this.pass = false;
    this.front = false;
    this.show = false;
  }
}
