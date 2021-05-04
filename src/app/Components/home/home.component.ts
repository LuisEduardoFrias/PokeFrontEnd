import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  
  private Contador : number = 0;
  
  Urlimage : string = '';

  private ListUrlImage = [
    "https://wallpapercave.com/wp/wp7547538.jpg",
    "https://nintendowire.com/wp-content/uploads/2020/11/banner_poke%CC%81mon_anime_season_4_johto_league_champions.jpg",
    "https://media.redadn.es/imagenes/articulos_334540.jpg",
    "https://www.tec.com.pe/wp-content/uploads/2016/07/Pokemon.jpg",
    "https://i.ytimg.com/vi/IFsdt2btkAk/maxresdefault.jpg"]

  ngOnInit(): void {

    setInterval(() =>
    {
      this.Urlimage = this.ListUrlImage[this.Contador];

      this.Contador++;  

      if (this.Contador == 5) {
        this.Contador = 0;
      }
    
    }, 2000);

  }

}
