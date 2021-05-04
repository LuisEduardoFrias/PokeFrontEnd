import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../Components/home/home.component';
import { PokemonsComponent} from '../Components/pokemons/pokemons.component';
import { PokeDetailsComponent } from '../Components/poke-details/poke-details.component';

const routes: Routes = [
  {
    path:"", component: HomeComponent
  },
  {
    path: "pokemons", component: PokemonsComponent
  },
  {
    path: "pokemons/details/:name", component: PokeDetailsComponent
  },
  {
    path: "**", redirectTo: ''
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
