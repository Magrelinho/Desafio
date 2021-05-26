import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonlistaComponent } from './pokemonlista.component';

describe('PokemonlistaComponent', () => {
  let component: PokemonlistaComponent;
  let fixture: ComponentFixture<PokemonlistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonlistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonlistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
