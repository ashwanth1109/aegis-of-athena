import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetInvasionComponent } from './alphabet-invasion.component';

describe('AlphabetInvasionComponent', () => {
  let component: AlphabetInvasionComponent;
  let fixture: ComponentFixture<AlphabetInvasionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlphabetInvasionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabetInvasionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
