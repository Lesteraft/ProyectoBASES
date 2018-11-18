import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPeliculasComponent } from './card-peliculas.component';

describe('CardPeliculasComponent', () => {
  let component: CardPeliculasComponent;
  let fixture: ComponentFixture<CardPeliculasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPeliculasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
