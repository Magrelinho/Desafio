import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscaimagempokemonService {

  constructor(private http: HttpClient) { }

  public url = 'https://pokeapi.co/api/v2/pokemon/'

  public buscaImagem(name): Observable<any> {

    return this.http.get<any>(`${this.url+name}`);
  }

  
}
