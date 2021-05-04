import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../Services/HttpService';
import { PaginationPokemon } from '../../Models/PaginationPokemon';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  //propertis

  page?:string = null;
  paginationPokeCard: PaginationPokemon;
  next:number;
  previeus: number;
  iserror: boolean = false;

  //propertis


  constructor(private httpservice: HttpService, private router : Router) { 
    var navegate = this.router.getCurrentNavigation();
    this.page = navegate?.extras?.state?.value;
  }



  ngOnInit(): void {
    
    if(this.page == null)
    {
      this.GetNetApi(null);
    }
    else
    {
      this.GetNetApi(Number(this.page) - 20);
    }
  };


  Navigator(name:string, url : string) {

      var LastIndex = url.lastIndexOf("/");
      var NewLastIndex = url.substring(0, LastIndex).lastIndexOf("/") + 1;

      var navegation : NavigationExtras = {
        state : {
          value : this.next,
          id: url.substring(NewLastIndex, LastIndex)
        }
      };

      this.router.navigate(['pokemons/details',name], navegation);
  }


  pageEvent(starting: string) {

    var pag: number;
    var nan = false;

    if(starting == 'next')
    {
      pag = this.next;
    }
    else if(starting == 'previeus')
    {
      if(this.previeus < 0 && this.previeus != -20 )
      {  
        nan = true;
      }
      else 
      {
        if(this.previeus == -20){
          pag = 0;
        }
        else
        {
          pag = this.previeus;
        }
        
      }
    }
    else
    {
      nan = true;
    }

    if(!nan)
    {
      this.paginationPokeCard = null;
    
      this.GetNetApi(pag);
    }
  }


  GetNetApi(pag ? : number){

    this.httpservice.GetNetApi(pag)
    .subscribe(pokecard =>
    {
        this.paginationPokeCard = pokecard;

        var num = this.paginationPokeCard.next.substring(
            this.paginationPokeCard.next.indexOf("=") + 1,
            this.paginationPokeCard.next.indexOf("&")
          );

        this.next = Number(num);
        this.previeus = Number(num) - 40;
        
    }, error => {

      this.iserror = true;

      console.error(error);

      });

  }


}
