import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../Services/HttpService';
import { PaginationPokemon } from '../../Models/PaginationPokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  constructor(private httpservice: HttpService) { }

  PaginationPokeCard: PaginationPokemon;

  /*PaginationPokeCard =
    new PaginationPokemon(0, "", "", [
        new Pokemon("bulbasaur", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", "")
      , new Pokemon("ivysaur", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png", "")
      , new Pokemon("venusaur", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png", "")
      , new Pokemon("charmander", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", "")
      , new Pokemon("charmeleon", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png", "")
      , new Pokemon("charizard", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png", "")
      , new Pokemon("squirtle", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", "")
      , new Pokemon("wartortle", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png", "")
      , new Pokemon("blastoise", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png", "")
      , new Pokemon("bulbasaur", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", "")
      , new Pokemon("ivysaur", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png", "")
      , new Pokemon("venusaur", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png", "")
      , new Pokemon("charmander", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", "")
      , new Pokemon("charmeleon", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png", "")
      , new Pokemon("charizard", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png", "")
      , new Pokemon("squirtle", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", "")
      , new Pokemon("wartortle", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png", "")
      , new Pokemon("blastoise", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png", "")
      , new Pokemon("bulbasaur", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", "")
      , new Pokemon("ivysaur", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png", "")
      , new Pokemon("venusaur", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png", "")
      , new Pokemon("charmander", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", "")
      , new Pokemon("charmeleon", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png", "")
      , new Pokemon("charizard", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png", "")
      , new Pokemon("squirtle", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", "")
      , new Pokemon("wartortle", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png", "")
      , new Pokemon("blastoise", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png", "")]);
  */
  
  ngOnInit(): void {
    

    const PokeCard =  this.httpservice.GetNetApi("api/Pokemon")
      .subscribe(pokecard =>
      {        
        this.PaginationPokeCard = pokecard;
        
        console.log(this.PaginationPokeCard);

      }, error => console.error(error));
    
  }

}
