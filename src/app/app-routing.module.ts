import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonlistaComponent } from './pokemonlista/pokemonlista.component';

const routes: Routes = [
  {
    path: "",
    component:PokemonlistaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
