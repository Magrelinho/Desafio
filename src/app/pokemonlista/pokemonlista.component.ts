import { Component, OnInit } from '@angular/core';
import { Pokemons } from '../classes/pokemon';
import { BuscaimagempokemonService } from '../services/buscaimagempokemon.service';
import { GetpokemonService } from '../services/getpokemon.service';
import { GetpokemonfavoritoService } from '../services/getpokemonfavorito.service';

@Component({
  selector: 'app-pokemonlista',
  templateUrl: './pokemonlista.component.html',
  styleUrls: ['./pokemonlista.component.css']
})
export class PokemonlistaComponent implements OnInit {

  public pokemons: Pokemons;
  public desabilitaBotaoFavorito: boolean;
  public imagem: any;
  public nomePokemon: string;

  constructor(
    private pokemonservice: GetpokemonService,
    private favoritoservice: GetpokemonfavoritoService,
    private imagemservice: BuscaimagempokemonService) {

  }

  ngOnInit() {
    this.buscaListaPokemon();
    this.desabilitaBotaoFavorito = true;

  }

  public buscaListaPokemon(offset: number = 0) {
    this.pokemonservice.buscaPokeLista(offset).subscribe((dados: Pokemons) => {
      this.pokemons = dados.results;
      this.pokemons.offset = offset;
      this.pokemons.previous = dados.previous;
      this.pokemons.next = dados.next;
      this.ordenaLista(this.pokemons);
    });
  }

  public isFavorito(name: String) {
    if (this.favoritoservice.getData(name))
      return 'assets/images/star-fill.svg'
    else
      return 'assets/images/star.svg'
  }

  public marcaFavorito(item: any) {
    this.favoritoservice.setData(item);
    this.habilitaBotaoFavorito();
  }

  public buscaListaPokemonFavoritos() {
    const listaSomenteFavoritos = this.favoritoservice.getFavoritos();
    this.pokemons = listaSomenteFavoritos;
    this.ordenaLista(this.pokemons);

  }

  public limparFavoritos() {
    this.favoritoservice.limparFavoritos();
    this.desabilitaBotaoFavorito = true;

  }

  public async habilitaBotaoFavorito() {
    const achou = this.favoritoservice.getFavoritos();
    if (achou.length >= 1) {
      this.desabilitaBotaoFavorito = false;
    } else {
      this.desabilitaBotaoFavorito = true;
    }

  }

  public buscaImagemPokemon(name) {
    this.imagemservice.buscaImagem(name).toPromise().then(val => {
      this.imagem = val.sprites.other['official-artwork'].front_default;
      this.nomePokemon = name;
    });

  }

  private ordenaLista(pokemons) {
    pokemons.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }

}
