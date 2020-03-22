import { Component, OnInit } from "@angular/core";
import { combineLatest, fromEvent, interval, Observable } from "rxjs";
import { map, scan, startWith, takeWhile } from "rxjs/operators";

export interface Alphabet {
  value: String;
  yPos: number;
}
export interface State {
  score: number;
  alphabets: Alphabet[];
}

@Component({
  selector: "app-alphabet-invasion",
  templateUrl: "./alphabet-invasion.component.html",
  styleUrls: ["./alphabet-invasion.component.css"]
})
export class AlphabetInvasionComponent implements OnInit {
  constructor() {}

  public endThreshold = 15;
  public gameWidth = 200;
  public gameHeight = 300;
  public isGameOver = false;
  public gameSpeed = 600;
  public score = 0;

  private getRandomLetter = (): string =>
    String.fromCharCode(
      Math.random() * ("z".charCodeAt(0) - "a".charCodeAt(0)) +
        "a".charCodeAt(0)
    );

  public alphabetArray: Alphabet[] = [];

  private getRandomPosition = (): number =>
    Math.floor(Math.random() * (this.gameWidth - 20));

  private getKey$ = (): Observable<string> =>
    fromEvent(document, "keydown").pipe(
      startWith({ key: "" }),
      map((e: KeyboardEvent) => e.key)
    );

  private getAlphabets$ = (): Observable<Alphabet[]> =>
    interval(this.gameSpeed).pipe(
      scan(alphabets => {
        const newAlphabet = {
          value: this.getRandomLetter(),
          yPos: this.getRandomPosition()
        };
        return [newAlphabet, ...alphabets];
      }, [])
    );

  private nextFn = (state: State): void => {
    this.alphabetArray = state.alphabets;
    this.score = state.score;
  };

  private errorFn = (): void => {};

  private completeFn = (): void => {
    this.isGameOver = true;
  };

  private getGame$ = (): Observable<State> =>
    combineLatest([this.getKey$(), this.getAlphabets$()]).pipe(
      scan(
        (state: State, [key, alphabets]: [string, Alphabet[]]) => {
          if (alphabets[alphabets.length - 1].value === key) {
            state.score += 1;
            alphabets.pop();
          }
          return {
            alphabets,
            score: state.score
          };
        },
        { score: 0, alphabets: [] }
      ),
      takeWhile(state => state.alphabets.length < this.endThreshold)
    );

  ngOnInit(): void {
    this.getGame$().subscribe(this.nextFn, this.errorFn, this.completeFn);
  }
}
