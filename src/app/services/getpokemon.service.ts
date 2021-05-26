import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemons } from '../classes/pokemon'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetpokemonService {
  private url = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  public buscaPokeLista(offset: number = 0): Observable<Pokemons> {
    return this.http.get<Pokemons>(`${this.url}?offset=${offset}&limit=50`);
  }
 

}
