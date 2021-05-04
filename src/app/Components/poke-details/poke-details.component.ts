import { Component, OnInit, Type } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { PokeCard } from 'src/app/Models/PokeCard';
import { HttpService } from 'src/app/Services/HttpService';
import { Ability } from '../../Models/Ability';
import { Move } from '../../Models/Move';
import { Type_ } from '../../Models/Type_';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.css']
})
export class PokeDetailsComponent implements OnInit {

  page : string;
  id : string;

  constructor(private router : Router, private  activatedRouter : ActivatedRoute, private httpservice: HttpService) { 
    var navigation = this.router.getCurrentNavigation();

    this.page = navigation?.extras?.state.value;
    this.id = navigation?.extras?.state.id;
  }

  PokeCards : PokeCard;

  ngOnInit(): void {
    
    this.httpservice.GetApiPkeDetails(this.id).subscribe(observable => {

        this. PokeCards = observable;

    }, (error) => console.log(error) );

    //this.pokeName =  this.activatedRouter.snapshot.params.name;
    this.activatedRouter.params.subscribe(params => {this.PokeCards.name = params.name});

  }

  Back(){

    var navegate :  NavigationExtras = {
      state:{
        value: this.page
      }
    }

    this.router.navigate(["/pokemons"],navegate);
  }

}
