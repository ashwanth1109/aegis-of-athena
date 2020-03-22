import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Hero } from './interfaces/hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the mssg after fetch call
    this.log('fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.log(`fetcher hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
